import nltk
from nltk.corpus import stopwords
from pymystem3 import Mystem
from string import punctuation
from string import digits
from nltk.probability import FreqDist
import io

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
nltk.download('punkt')
nltk.download('stopwords')
rus_stopwords = stopwords.words("russian")
rus_stopwords.remove("не")


def analyser(request: str, model: Pipeline):
    """
    Analyse the request and predict its type.
    """
    formatted_request = _lemmatize(request, testing=False)
    #prediction = model.predict(formatted_request)
    #return prediction


def _lemmatize(request: str, testing = False):
    """
    Change words in the request to their lemmas (normal form).
    """
    no = False
    digpunc = False # digits or punc
    m = Mystem()
    tokens = []
    punc = punctuation
    punc += "№—«»"

    request = request.replace("\ufeff", "").strip()

    nltk_tokens = nltk.tokenize.word_tokenize(request.lower())
    token_string = " ".join(nltk_tokens)
    lemmas = m.lemmatize(token_string)

    for lemma in lemmas:
        if lemma.__len__() > 1:
            if lemma.__contains__(" "):
                splits = lemma.rsplit(" ")
                for split in splits:
                    if lemma != "":
                        lemmas.append(split)
                continue
            if lemma not in rus_stopwords and lemma != '' and lemma != ' ':
                for letter in lemma:
                    if letter in digits or letter in punc:
                        digpunc = True
                        break
                if digpunc:
                    digpunc = False
                    continue
                if lemma == 'не':
                    no = True
                    continue
                if no:
                    tokens.append("не" + lemma)
                    no = False
                else:
                    tokens.append(lemma)

    formatted_request = " ".join(tokens)
    if testing:
        print(request.strip())
        print(tokens)
        print(formatted_request, '\n')

    return formatted_request


def _train(train_set: list, groups: list, testing: bool = False):
    """
    Train the bot to analyse user's message (bot will return a list of suitable problems in response).
    """
    X = train_set
    y = groups

    if testing:
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.4)  # not obligatory
    else:
        X_train, y_train = X, y

    model = Pipeline([
        (CountVectorizer(ngram_range=(1, 2))),  # count words
        (TfidfTransformer()),   # evaluate weights for words
        (MultinomialNB())   # one of the best models to predict classes (works better with integer but can Tf-Idf)
    ])

    model = model.fit(X_train, y_train)
    if testing:
        print(model.predict(X_test))
        print('Model score:', model.score(X_test, y_test))

    return model


if __name__ == "__main__":
    # requests = pd.DataFrame(
    #     np.array([["",""], ["",""], ["",""]),
    #     columns=['requests', 'types'])
    # train_set = ""
    # model = _train(train_set, groups)

    # with open("samples.txt") as file:
    #     samples = file.readlines()
    #     for sample in samples:
    #         analyser(sample, model=None)

    file_path = "extract from registry_A"

    try:
        with open(file_path+"_string.txt") as file:
            big_string = file.read()
    except FileNotFoundError:
        data = []
        with open(file_path+".txt", encoding="utf-8") as file:
            samples = file.read()
            f_string = (_lemmatize(samples, testing=False))
            data.append(f_string)

        big_string = " ".join(data)
        f = open(file_path+"_string.txt", 'w')
        f.write(big_string)
        f.close()

    token_string = nltk.tokenize.word_tokenize(big_string)

    fdist = FreqDist(token_string)
    print(fdist.most_common(30))
    fdist.plot(30, cumulative=False)
