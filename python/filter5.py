# Don't give me five!
# In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

def dont_give_me_five(start,end):
    new = []
    for x in range(start,end+1):
        if '5' in str(x):
            pass
        else:
            new.append(x)
    
    return len(new)
            