#This file will handle all of the queries to get data for the app
import numpy as np
import pandas as pd


class Data():

    def __init__(self):
        self.data = pd.read_csv('./data/dc_crime_add_vars.csv')

    def getMapData(self, data):
        #Converting the REPORT_DAT column into a datetime column
        self.data['REPORT_DAT'] = pd.to_datetime(self.data['REPORT_DAT'])
        #Converting what the user entered to proper format
        first_time_stamp = pd.to_datetime(data['firstDate'])
        last_time_stamp = pd.to_datetime(data['lastDate'])
        self.data = self.data.loc[(self.data.REPORT_DAT >= first_time_stamp) &
        (self.data.REPORT_DAT <= last_time_stamp), :]
        print(self.data)


# test = Data()
# test.getMapData()
