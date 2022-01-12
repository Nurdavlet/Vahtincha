def summa(summado,let,procent):
  summadt=summado/let+(1000*12)
	summaposle=summado/let/((100-procent)/100.0)/0.95+(1000*12)
	temp=[]
	i=0
	for y in range(1,let):
		summaposle=(summaposle+summadt/((100-procent)/100.0))/0.95
		i=summaposle/let/12
		temp.append(str(i))
	vmesp=summaposle/let/12
	print("vsego "+str(summaposle)+" v mesyac "+str(vmesp))
	print("$\n".join(temp))
if __name__ == "__main__":
	while(True):
		summad=int(input("Vvedite summu otlichnogo ot 0 "))
		if summad == 0:
			break
		lets=int(input("Vvedite let "))
		procents=int(input("Vvedite procent "))
		summa(summad,lets,procents)
