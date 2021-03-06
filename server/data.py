#This file will handle all of the queries to get data for the app
import numpy as np
import pandas as pd


class Data():

    def __init__(self):
        self.data = pd.read_csv('./data/dc_crime_add_vars.csv')

    def getMapData(self, data):
        print('Getting Data')
        #Converting the REPORT_DAT column into a datetime column
        self.data['REPORT_DAT'] = pd.to_datetime(self.data['REPORT_DAT'])
        #Converting what the user entered to proper format
        first_time_stamp = pd.to_datetime(data['firstDate'])
        last_time_stamp = pd.to_datetime(data['lastDate'])
        self.data = self.data.loc[(self.data.REPORT_DAT >= first_time_stamp) & (self.data.REPORT_DAT <= last_time_stamp), :]
        self.data = self.data[(self.data.SHIFT == data['shift']) & (self.data.OFFENSE == data['offense'])]
        #Getting the specific columns that I want
        self.data = self.data[['BLOCK', 'OFFENSE', 'VOTING_PRECINCT', 'XBLOCK', 'YBLOCK']]
        # #This list will hold all the dictionaries for the data
        data_list = []
        #A count to loop through the dataset
        count = 0
        while count < len(self.data):
            #This dictionary will hold the wineries and variety's
            crime_information = {}
            crime_information['Location'] = self.data.iloc[count,0]
            crime_information['Offense'] = self.data.iloc[count,1]
            crime_information['Votint Precinct'] = self.data.iloc[count,2]
            crime_information['long'] = self.data.iloc[count,3]
            crime_information['lat'] = self.data.iloc[count,4]
            data_list.append(crime_information)
            count += 1
        print('data Finished')
        return data_list



# test = Data()
# test.getMapData()
