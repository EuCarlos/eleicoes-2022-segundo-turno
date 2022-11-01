import pandas as pd
import matplotlib.pyplot as plt
import calendar, time
# !pip freeze > './requirements.txt'

# get the timestamp
current_GMT = time.gmtime()
time_stamp = calendar.timegm(current_GMT)
fig_filename = f"plot_{time_stamp}.png"

# open the CSV file
data = pd.read_csv('csv/eleicoes-2022-segundo-turno.csv')
# data.plot()

# generate and customize the plot
plt.style.use('seaborn')

fig, ax = plt.subplots(figsize=(15, 6))
ax.plot(data['horario'], data['bolsonaro'], data['lula'])

ax.set_title("Estatísticas 2° Turno das eleições 2022")
ax.set_xlabel('Horário')
ax.set_ylabel('Porcentagem')
ax.legend(['Bolsonaro', 'Lula'], loc='upper right')

# save plot
fig.savefig(fig_filename, transparent=False)