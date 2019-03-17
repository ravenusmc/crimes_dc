#This file will handle all of the queries to get data for the app
import numpy as np
import pandas as pd


class Data():

    def __init__(self):
        self.data = pd.read_csv('./data/dc_crime_add_vars.csv')

    def getMapData(self):
        print(self.data.head())
# test = Data()
# test.test()
