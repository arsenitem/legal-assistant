import nltk
nltk.download('stopwords')

from nltk.corpus import stopwords
from pymystem3 import Mystem
from string import punctuation
rus_stopwords = stopwords.words("russian")
rus_stopwords.remove("не")


def analyser(request: str):
    no = False
    mystem = Mystem()
    tokens = []
    lemmas = mystem.lemmatize(text=request.lower())

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
    print(request.strip())
    print(tokens)
    print(formatted_request, '\n')


if __name__ == "__main__":
    with open("samples.txt") as file:
        samples = file.readlines()
        for sample in samples:
            sample.replace("\n", "")
            analyser(sample)
