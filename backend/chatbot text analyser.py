# import nltk
# nltk.download('stopwords')

from nltk.corpus import stopwords
from pymystem3 import Mystem
from string import punctuation
rus_stopwords = stopwords.words("russian")
rus_stopwords.remove("не")

from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline


def analyser(request: str, model: Pipeline):
    formatted_request = _lemmatize(request)
    prediction = model.predict(formatted_request)
    return prediction


def _lemmatize(request: str):
    no = False
    m = Mystem()
    tokens = []

    request.replace("\n", "")
    lemmas = m.lemmatize(text=request.lower())

    for lemma in lemmas:
        if lemma not in rus_stopwords and lemma != " " and lemma.strip() not in punctuation:
            if lemma == 'не':
                no = True
                continue
            if no:
                tokens.append("не" + lemma)
                no = False
            else:
                tokens.append(lemma)

    formatted_request = " ".join(tokens)
    # print(request.strip())
    # print(tokens)
    # print(formatted_request, '\n')
    return formatted_request


def _train(train_set: str, groups: list[str], testing: bool = False):

    X = train_set
    y = groups

    if testing:
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.4)  # not obligatory
    else:
        X_train, y_train = X, y

    model = Pipeline([
        (CountVectorizer(ngram_range=(1, 2))),
        (TfidfTransformer()),
        (MultinomialNB())
    ])

    model = model.fit(X_train, y_train)

    if testing:
        predictions = model.predict(X_test)
        print('Model score:', model.score(X_test, y_test))

    return model


if __name__ == "__main__":
    # train_set = ""
    # model = _train(train_set)

    with open("samples.txt") as file:
        samples = file.readlines()
        for sample in samples:
            analyser(sample)

