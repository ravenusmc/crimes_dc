#This file will provide support for this project.
import numpy as np
import pandas as pd

class Support():

    def __init__(self):
        self.data = pd.read_csv('./data/dc_crime_add_vars.csv')

    #This method will get me unique values in the data frame
    def unique(self):
        print(self.data.OFFENSE.unique())

play = Support()
play.unique()
