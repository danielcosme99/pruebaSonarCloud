# Se importa la librería keras y la librería numpy
from keras.models import Sequential
from keras.layers import Dense
import numpy
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' 

# Se fija una semilla de aleatoriedad para que el proceso sea reproducible
numpy.random.seed(7)

# Carga de los datos
csv = open("sample_data/autismo.csv")
dataset = numpy.genfromtxt(csv, delimiter=",", skip_header=1)

# Variables de entrada y salida
X = dataset[:,1:11]
Y = dataset[:,18]

# Se reconstruye el nparray con la regla establecida (resultado>6 = autismo)

fixedY = []

for i in Y:
  if(i > 6):
    fixedY.append(True)
  else: fixedY.append(False)

fixedY = numpy.array(fixedY)

# Se crea el modelo
model = Sequential()
model.add(Dense(10, input_dim=10, activation='relu'))
model.add(Dense(4, activation='relu'))
model.add(Dense(1, activation='sigmoid'))

# Se compila el modelo
model.compile(loss='mean_squared_error', optimizer='adam', metrics=['binary_accuracy'])

# Entrenamiento
model.fit(X, fixedY, epochs=100, verbose=0)

# Evaluación del modelo
scores = model.evaluate(X, fixedY, verbose=0)
# print("\n%s: %.2f%%" % (model.metrics_names[1], scores[1]*100))

# Modelo de predicción
print(model.predict(X, verbose=0))