var names=new Array();
names[0]="peter";
names[1]="John";
names[2]="Jenny";
names[3]="jack";
names[4]="paul";
names[5]="leon";
names[6]="max";
names[7]="paula";
names[8]="laura";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}