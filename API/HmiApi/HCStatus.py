# -*- coding: utf-8 -*-
"""
Created on Wed Aug 23 12:37:45 2017

@author: jjnava
"""
import sys
import random

class HCStatus: 
    
    @staticmethod
    def getHC_Status(HC_List):
        HC_Health = ["EFI=TERRAIN ALERT","ALTIMETER=ALERT","AIRSPEED SENSOR=NO SIGNAL","HTAWS=SYSTEM ALTERT","EFI=COLLISION WARNING", "EFI=RADAR MALFUNCTION"]
        LK_Location = ["(42.9476, -87.8966)","(36.840945, -120.023435)","(38.990157, -104.378904)","(30.293224, -92.162107)","(40.543860, -78.099607)","(42.355297, -92.381834)","(47.365617, -120.331053)","(47.126960, -109.344724)","(41.800801, -99.281248)","(46.917253, -98.753904)"]
        HC = HC_List.split("@")
        HC_Status=""
        for i in HC:
            HC_Status=HC_Status+i+"|"+str(random.choice(HC_Health))+"|"+str(random.choice(LK_Location))+"@"
	HC_Status=HC_Status+"\\r\\n\\r\\n"
        return HC_Status
    
MyClass = HCStatus()
print (MyClass.getHC_Status(sys.argv[1]))
