function rs1() {
    let g = "Binary";
    let h = "Decimal";
    let i = "Octal";
    let j = "Hexadecimal";

    let a = document.getElementById("users").selectedIndex;
    let m = document.getElementById("users").getElementsByTagName("option")[a].value;
    let c = document.getElementById("users1").selectedIndex;
    let l = document.getElementById("users1").getElementsByTagName("option")[c].value;
    if (m.localeCompare(g) == 0 && l.localeCompare(h) == 0) {
        let n = document.getElementById("a").value;
        let lom = n.split("");
        let k = ["0", "1", "."];

        if (n.includes(".")) {
            let sum1 = 0;
            let sum2 = 0;
            let onto = 0;
            for (let ind = 0; ind < lom.length; ind++) {
                if (lom[ind] === k[2]) {
                    onto = ind;
                }
            }
            for (let ing = 0, ine = onto - 1; ing <= onto - 1, ine >= 0; ing++, ine--) {
                sum1 = sum1 + (lom[ing] * Math.pow(2, ine));
            }
            let w = lom.length - (onto + 1);

            for (let ins = onto + 1, inr = 1; ins < lom.length, inr <= w; ins++, inr++) {
                sum2 = sum2 + (lom[ins] * Math.pow(2, (-inr)));
            }
            let dc = sum1 + sum2;
            document.getElementById("u").innerHTML = dc;
            if (n.startsWith(".")) {
                document.getElementById("u").innerHTML = sum2;
            }
        }
        else if (n.includes("1") || n.includes("0")) {
            let decimal = parseInt(n, 2).toString(10);
            document.getElementById("u").innerHTML = decimal;
        }
        n = document.getElementById("a").value;
        if (isNaN(n) === true) {
            alert("Please, enter Binary Number to avoid wrong output");
            document.getElementById("u").innerHTML = "";
        }
    }
    if (m.localeCompare(g) == 0 && l.localeCompare(i) == 0) {
        let n = document.getElementById("a").value;
        let lom = n.split("");
        let k = ["0", "1", "."];
        if (n.includes(".")) {
            let onto = 0;
            for (let ind = 0; ind < lom.length; ind++) {
                if (lom[ind] === k[2]) {
                    onto = ind;
                }
            }
            let wen = n.split(".");

            let wn = wen[1].length;
            let vr = 3;
            let ze = ["0", "00"];
            let res1 = parseInt(wen[0], 2).toString(8);
            if (vr != 0 && wn % vr == 0) {
                let res2 = parseInt(wen[1], 2).toString(8);
                let res3 = `${res1}.${res2}`;
                document.getElementById("u").innerHTML = res3;
                if (n.startsWith(".")) {
                    document.getElementById("u").innerHTML = "0." + res2;
                }
            }
            else if (vr != 0 && wn % vr == 1) {
                let con1 = wen[1].concat(ze[1]);
                let res4 = parseInt(con1, 2).toString(8);
                let res5 = `${res1}.${res4}`;
                document.getElementById("u").innerHTML = res5;
                if (n.startsWith(".")) {
                    document.getElementById("u").innerHTML = "0." + res4;
                }

            }
            else if (vr != 0 && wn % vr == 2) {
                let con2 = wen[1].concat(ze[0]);
                let res6 = parseInt(con2, 2).toString(8);
                let res7 = `${res1}.${res6}`;
                document.getElementById("u").innerHTML = res7;
                if (n.startsWith(".")) {
                    document.getElementById("u").innerHTML = "0." + res6;
                }
            }
        }
        else if (n.includes("1") || n.includes("0")) {
            let octal = parseInt(n, 2).toString(8);
            document.getElementById("u").innerHTML = octal;
        }
        let bro = document.getElementById("a").value;
        if (isNaN(bro) === true) {
            alert("Please, enter Binary Number to avoid wrong output");
            document.getElementById("u").innerHTML = "";
        }

    }
    else if (m.localeCompare(g) == 0 && l.localeCompare(j) == 0) {
        let n = document.getElementById("a").value;
        let lom = n.split("");
        let k = ["0", "1", "."];
        if (n.includes(".")) {
            let onto = 0;
            for (let ind = 0; ind < lom.length; ind++) {
                if (lom[ind] === k[2]) {
                    onto = ind;
                }
            }
            let wen = n.split(".");

            let wn = wen[1].length;
            let vr = 4;
            let ze = ["0", "00", "000"];
            let res1 = parseInt(wen[0], 2).toString(16);
            if (vr != 0 && wn % vr == 0) {
                let res2 = parseInt(wen[1], 2).toString(16);
                let res3 = `${res1}.${res2}`;
                document.getElementById("u").innerHTML = res3;
                if (n.startsWith(".")) {
                    document.getElementById("u").innerHTML = "0." + res2;
                }
            }
            else if (vr != 0 && wn % vr == 1) {
                let con1 = wen[1].concat(ze[2]);
                let res4 = parseInt(con1, 2).toString(16);
                let res5 = `${res1}.${res4}`;
                document.getElementById("u").innerHTML = res5;
                if (n.startsWith(".")) {
                    document.getElementById("u").innerHTML = "0." + res4;
                }

            }
            else if (vr != 0 && wn % vr == 2) {
                let con2 = wen[1].concat(ze[1]);
                let res6 = parseInt(con2, 2).toString(16);
                let res7 = `${res1}.${res6}`;
                document.getElementById("u").innerHTML = res7;
                if (n.startsWith(".")) {
                    document.getElementById("u").innerHTML = "0." + res6;
                }
            }
            else if (vr != 0 && wn % vr == 3) {
                let con3 = wen[1].concat(ze[0]);
                let res8 = parseInt(con3, 2).toString(16);
                let res9 = `${res1}.${res8}`;
                document.getElementById("u").innerHTML = res9;
                if (n.startsWith(".")) {
                    document.getElementById("u").innerHTML = "0." + res8;
                }
            }
        }
        else if (n.includes("1") || n.includes("0")) {
            let hexa = parseInt(n, 2).toString(16);
            document.getElementById("u").innerHTML = hexa;
        }
        let bro = document.getElementById("a").value;
        if (isNaN(bro) === true) {
            alert("Please, enter Binary Number to avoid wrong output");
            document.getElementById("u").innerHTML = "";
        }

    }
    else if (m.localeCompare(h) == 0 && l.localeCompare(g) == 0) {
        let n = document.getElementById("a").value;
        let lom = n.split("");
        let k = ["0", "1", "."];

        if (n.includes(".")) {
            let sum2 = 0;
            let onto = 0;
            for (let ind = 0; ind < lom.length; ind++) {
                if (lom[ind] === k[2]) {
                    onto = ind;
                
                }
            }
            let dren = n.split(".");
            let ses1 = parseInt(dren[0], 10).toString(2);
            let w = lom.length - (onto + 1);

            for (let ins = onto + 1, inr = 1; ins < lom.length, inr <= w; ins++, inr++) {
                sum2 = sum2 + (lom[ins] * Math.pow(10, (-inr)));
            }
            let dbr = ses1 + sum2.toString(2);
            document.getElementById("u").innerHTML = dbr;
            if (n.startsWith(".")) {
                document.getElementById("u").innerHTML = sum2.toString(2);
            }
        }
        else if (isNaN(n) === false) {
            let bin1 = parseInt(n, 10).toString(2);
            document.getElementById("u").innerHTML = bin1;
        }
        n = document.getElementById("a").value;
        if (isNaN(n) === true) {
            alert("Please, enter Decimal Number to avoid wrong output");
            document.getElementById("u").innerHTML = "";
        }
    }
    else if (m.localeCompare(h) == 0 && l.localeCompare(j) == 0) {
        let n = document.getElementById("a").value;
        let lom = n.split("");
        let k = ["0", "1", "."];

        if (n.includes(".")) {
            let sum2 = 0;
            let onto = 0;
            for (let ind = 0; ind < lom.length; ind++) {
                if (lom[ind] === k[2]) {
                    onto = ind;
                    
                }
            }
            let drei = n.split(".");
            let ses3 = parseInt(drei[0], 10).toString(16);
            console.log(ses3);
            let w = lom.length - (onto + 1);
            for (let ins = onto + 1, inr = 1; ins < lom.length, inr <= w; ins++, inr++) {
                sum2 = sum2 + (lom[ins] * Math.pow(10, (-inr)));
            }
            let yt = sum2.toString(16);
            let rq = yt.split(".");
            let gh = rq[1].toString(16);
            let dbry = ses3 + "." + rq[1].toString(16);
            document.getElementById("u").innerHTML = dbry;
            if (n.startsWith(".")) {
                document.getElementById("u").innerHTML = "0." + gh;
            }
        }
        else if (isNaN(n) === false) {
            let hex = parseInt(n, 10).toString(16);
            document.getElementById("u").innerHTML = hex;
        }
        n = document.getElementById("a").value;
        if (isNaN(n) === true) {
            alert("Please, enter Decimal Number to avoid wrong output");
            document.getElementById("u").innerHTML = "";
        }

    }
    else if (m.localeCompare(h) == 0 && l.localeCompare(i) == 0) {
        let n = document.getElementById("a").value;
        let lom = n.split("");
        let k = ["0", "1", "."];

        if (n.includes(".")) {
            let sum2 = 0;
            let onto = 0;
            for (let ind = 0; ind < lom.length; ind++) {
                if (lom[ind] === k[2]) {
                    onto = ind;
                
                }
            }
            let drei = n.split(".");
            let ses3 = parseInt(drei[0], 10).toString(8);
            console.log(ses3);
            let w = lom.length - (onto + 1);
            for (let ins = onto + 1, inr = 1; ins < lom.length, inr <= w; ins++, inr++) {
                sum2 = sum2 + (lom[ins] * Math.pow(10, (-inr)));
            }
            let yt = sum2.toString(8);
            let rq = yt.split(".");
            let gh = rq[1].toString(8);
            let dbry = ses3 + "." + rq[1].toString(8);
            document.getElementById("u").innerHTML = dbry;
            if (n.startsWith(".")) {
                document.getElementById("u").innerHTML = "0." + gh;
            }
        }
        else if (isNaN(n) === false) {
            let octa = parseInt(n, 10).toString(8);
            document.getElementById("u").innerHTML = octa;
        }
        n = document.getElementById("a").value;
        if (isNaN(n) === true) {
            alert("Please, enter Decimal Number to avoid wrong output");
            document.getElementById("u").innerHTML = "";
        }

    }
    else if (m.localeCompare(i) == 0 && l.localeCompare(g) == 0) {
        let n = document.getElementById("a").value;
        let lom = n.split("");
        let k = ["0", "1", "."];

        if (n.includes(".")) {
            let sum2 = 0;
            let onto = 0;
            for (let ind = 0; ind < lom.length; ind++) {
                if (lom[ind] === k[2]) {
                    onto = ind;
                    
                }
            }
            let dren = n.split(".");
            let ses1 = parseInt(dren[0], 8).toString(2);
            let w = lom.length - (onto + 1);

            for (let ins = onto + 1, inr = 1; ins < lom.length, inr <= w; ins++, inr++) {
                sum2 = sum2 + (lom[ins] * Math.pow(8, (-inr)));
            }
            let dbr = ses1 + sum2.toString(2);
            document.getElementById("u").innerHTML = dbr;
            if (n.startsWith(".")) {
                document.getElementById("u").innerHTML = sum2.toString(2);
            }
        }
        else if (isNaN(n) === false) {
            let bin3 = parseInt(n, 8).toString(2);
            document.getElementById("u").innerHTML = bin3;
        }
        n = document.getElementById("a").value;
        if (isNaN(n) === true) {
            alert("Please, enter Octal Number to avoid wrong output");
            document.getElementById("u").innerHTML = "";
        }

    }
    else if (m.localeCompare(i) == 0 && l.localeCompare(h) == 0) {
        let n = document.getElementById("a").value;
        let lom = n.split("");
        let k = ["0", "1", "."];

        if (n.includes(".")) {
            let sum2 = 0;
            let onto = 0;
            for (let ind = 0; ind < lom.length; ind++) {
                if (lom[ind] === k[2]) {
                    onto = ind;
                    
                }
            }
            let dren = n.split(".");
            let ses1 = parseInt(dren[0], 8).toString(10);
            let w = lom.length - (onto + 1);

            for (let ins = onto + 1, inr = 1; ins < lom.length, inr <= w; ins++, inr++) {
                sum2 = sum2 + (lom[ins] * Math.pow(8, (-inr)));
            }
            let yt1 = sum2.toString(10);
            let rq1 = yt1.split(".");
            let gh1 = rq1[1].toString(10);
            let dbr = ses1+"."+rq1[1].toString(10);
            document.getElementById("u").innerHTML = dbr;
            if (n.startsWith(".")) {
                document.getElementById("u").innerHTML = "0."+gh1;
            }
        }
        else if (isNaN(n) === false) {
            let deci = parseInt(n, 8).toString(10);
            document.getElementById("u").innerHTML = deci;
        }
        n = document.getElementById("a").value;
        if (isNaN(n) === true) {
            alert("Please, enter Octal Number to avoid wrong output");
            document.getElementById("u").innerHTML = "";
        }

    }
    else if (m.localeCompare(i) == 0 && l.localeCompare(j) == 0) {
        let n = document.getElementById("a").value;
        let lom = n.split("");
        let k = ["0", "1", "."];

        if (n.includes(".")) {
            let sum2 = 0;
            let onto = 0;
            for (let ind = 0; ind < lom.length; ind++) {
                if (lom[ind] === k[2]) {
                    onto = ind;
                    
                }
            }
            let drei = n.split(".");
            let ses3 = parseInt(drei[0], 8).toString(16);
            console.log(ses3);
            let w = lom.length - (onto + 1);
            for (let ins = onto + 1, inr = 1; ins < lom.length, inr <= w; ins++, inr++) {
                sum2 = sum2 + (lom[ins] * Math.pow(8, (-inr)));
            }
            let yt = sum2.toString(16);
            let rq = yt.split(".");
            let gh = rq[1].toString(16);
            let dbry = ses3 + "." + rq[1].toString(16);
            document.getElementById("u").innerHTML = dbry;
            if (n.startsWith(".")) {
                document.getElementById("u").innerHTML = "0." + gh;
            }
        } else if (isNaN(n) === false) {
            let hexade = parseInt(n, 8).toString(16);
            document.getElementById("u").innerHTML = hexade;
        }
        n = document.getElementById("a").value;
        if (isNaN(n) === true) {
            alert("Please, enter Octal Number to avoid wrong output");
            document.getElementById("u").innerHTML = "";
        }
    }
    else if (m.localeCompare(j) == 0 && l.localeCompare(g) == 0) {
        let n = document.getElementById("a").value;
        let lom = n.split("");
        let k = ["0", "1", "."];

        if (n.includes(".")) {
            // let sum2 = 0;
            let onto = 0;
            for (let ind = 0; ind < lom.length; ind++) {
                if (lom[ind] === k[2]) {
                    onto = ind;
                    
                }
            }
            let dren = n.split(".");
            let ses1 = parseInt(dren[0], 16).toString(2);
            let sas = parseInt(dren[1], 16).toString(2);
            let wn6 = sas.length;

            let vr1 = 4;
            let ze5 = ["0", "00", "000"];

            if (vr1 != 0 && wn6 % vr1 == 0) {

                let ans = ses1 + "." + sas;
                document.getElementById("u").innerHTML = ans;
                if (n.startsWith(".")) {
                    document.getElementById("u").innerHTML = "0." + sas;
                }
            }

            if (vr1 != 0 && wn6 % vr1 == 1) {
                let ze6 = ze5[2].concat(sas);
                let ans9 = ses1 + "." + ze6;
                document.getElementById("u").innerHTML = ans9;
                if (n.startsWith(".")) {
                    document.getElementById("u").innerHTML = "0." + ze6;
                }
            }
            if (vr1 != 0 && wn6 % vr1 == 2) {
                let ze7 = ze5[1].concat(sas);
                let ans10 = ses1 + "." + ze7;
                document.getElementById("u").innerHTML = ans10;
                if (n.startsWith(".")) {
                    document.getElementById("u").innerHTML = "0." + ze7;
                }
            }
            if (vr1 != 0 && wn6 % vr1 == 3) {
                let zeu = ze5[0].concat(sas);
                let ans11 = ses1 + "." + zeu;
                document.getElementById("u").innerHTML = ans11;
                if (n.startsWith(".")) {
                    document.getElementById("u").innerHTML = "0." + zeu;
                };
            }
        }
        else if (n.includes("0") === true || n.includes("1") === true || n.includes("2") === true || n.includes("3") === true || n.includes("4") === true || n.includes("5") === true || n.includes("6") === true || n.includes("7") === true || n.includes("8") === true || n.includes("9") === true || n.includes("A") === true || n.includes("B") === true || n.includes("C") === true || n.includes("D") === true || n.includes("E") === true || n.includes("F") === true ||
            n.includes("a") === true || n.includes("b") === true || n.includes("c") === true || n.includes("d") === true || n.includes("e") === true || n.includes("f") === true) {
            let bint = parseInt(n, 16).toString(2);
            document.getElementById("u").innerHTML = bint;
        } else {

            alert("Please, enter Hexadecimal Number to avoid wrong output");
            document.getElementById("u").innerHTML = "";
        }
        if (n.includes("H") === true || n.includes("I") === true || n.includes("J") === true || n.includes("K") === true || n.includes("L") === true || n.includes("M") === true || n.includes("N") === true || n.includes("O") === true || n.includes("P") === true || n.includes("Q") === true || n.includes("R") === true || n.includes("S") === true || n.includes("T") === true || n.includes("U") === true || n.includes("V") === true || n.includes("W") === true || n.includes("X") === true || n.includes("Y") === true || n.includes("Z") === true || n.includes("g") === true || n.includes("h") === true || n.includes("i") === true || n.includes("j") === true || n.includes("k") === true || n.includes("l") === true || n.includes("m") === true || n.includes("n") === true || n.includes("o") === true || n.includes("p") === true || n.includes("q") === true || n.includes("r") === true || n.includes("s") === true || n.includes("t") === true || n.includes("u") === true || n.includes("v") === true || n.includes("w") === true || n.includes("G") === true || n.includes("x") === true || n.includes("y") === true || n.includes("z") === true || n.includes("[") === true || n.includes("]") === true || n.includes("}") === true || n.includes("{") === true || n.includes("!") === true || n.includes("@") === true || n.includes("#") === true || n.includes("$") === true || n.includes("%") === true || n.includes("^") === true || n.includes("&") === true || n.includes("*") === true || n.includes("-") === true || n.includes("_") === true || n.includes("+") === true || n.includes("/") === true || n.includes("|") === true || n.includes(",") === true || n.includes(">") === true || n.includes("<") === true || n.includes("?") === true) {
            alert("Please, enter Hexadecimal Number to avoid wrong output");
            document.getElementById("u").innerHTML = "";
        }
    }
    else if (m.localeCompare(j) == 0 && l.localeCompare(h) == 0) {
        let n = document.getElementById("a").value;
        let lom = n.split("");
        let k = ["0", "1", "."];




        if (n.includes(".")) {
            let dren = n.split(".");
            let ses1 = parseInt(dren[0], 16).toString(2);
            let sas = parseInt(dren[1], 16).toString(2);
            let wn6 = sas.length;
            let vr1 = 4;
            let ze5 = ["0", "00", "000"];
            if (vr1 != 0 && wn6 % vr1 == 0) {
                let ans = ses1 + "." + sas;
                let sumo = 0;
                let sumi = 0;
                let onto = 0;
                for (let ind = 0; ind < ans.length; ind++) {
                    if (ans[ind] === k[2]) {
                        onto = ind;
                        
                    }
                }
                for (let ing = 0, ine = onto - 1; ing <= onto - 1, ine >= 0; ing++, ine--) {
                    sumo = sumo + (ans[ing] * Math.pow(2, ine));
                    console.log(sumo);
                }
                let w = ans.length - (onto + 1);

                for (let ins = onto + 1, inr = 1; ins < ans.length, inr <= w; ins++, inr++) {
                    sumi = sumi + (ans[ins] * Math.pow(2, (-inr)));
                }
                console.log(sumi);
                let dc0 = sumo + sumi;
                document.getElementById("u").innerHTML = dc0;
                if (n.startsWith(".")) {
                    document.getElementById("u").innerHTML = sumi;
                }
            }
            if (vr1 != 0 && wn6 % vr1 == 1) {
                let ze6 = ze5[2].concat(sas);
                let ans9 = ses1 + "." + ze6;
                let sumon = 0;
                let sumin = 0;
                let onto = 0;
                for (let ind = 0; ind < ans9.length; ind++) {
                    if (ans9[ind] === k[2]) {
                        onto = ind;
                        
                    }
                }
                for (let ing = 0, ine = onto - 1; ing <= onto - 1, ine >= 0; ing++, ine--) {
                    sumon = sumon + (ans9[ing] * Math.pow(2, ine));
                    console.log(sumon);
                }
                let w = ans9.length - (onto + 1);

                for (let ins = onto + 1, inr = 1; ins < ans9.length, inr <= w; ins++, inr++) {
                    sumin = sumin + (ans9[ins] * Math.pow(2, (-inr)));
                }
                console.log(sumin);
                let dc01 = sumon + sumin;
                document.getElementById("u").innerHTML = dc01;
                if (n.startsWith(".")) {
                    document.getElementById("u").innerHTML = sumin;
                }


            }
            if (vr1 != 0 && wn6 % vr1 == 2) {
                let ze7 = ze5[1].concat(sas);
                let ansp = ses1 + "." + ze7;
                let sumoni = 0;
                let sumini = 0;
                let onto = 0;
                for (let ind = 0; ind < ansp.length; ind++) {
                    if (ansp[ind] === k[2]) {
                        onto = ind;
                        
                    }
                }
                for (let ing = 0, ine = onto - 1; ing <= onto - 1, ine >= 0; ing++, ine--) {
                    sumoni = sumoni + (ansp[ing] * Math.pow(2, ine));
                    console.log(sumoni);
                }
                let w = ansp.length - (onto + 1);

                for (let ins = onto + 1, inr = 1; ins < ansp.length, inr <= w; ins++, inr++) {
                    sumini = sumini + (ansp[ins] * Math.pow(2, (-inr)));
                }
                console.log(sumini);
                let dc0p = sumoni + sumini;
                document.getElementById("u").innerHTML = dc0p;
                if (n.startsWith(".")) {
                    document.getElementById("u").innerHTML = sumini;
                }
            }
            if (vr1 != 0 && wn6 % vr1 == 3) {
                let zeu = ze5[0].concat(sas);
                let ansl = ses1 + "." + zeu;
                let sumono = 0;
                let sumino = 0;
                let onto = 0;
                for (let ind = 0; ind < ansl.length; ind++) {
                    if (ansl[ind] === k[2]) {
                        onto = ind;
                        
                    }
                }
                for (let ing = 0, ine = onto - 1; ing <= onto - 1, ine >= 0; ing++, ine--) {
                    sumono = sumono + (ansl[ing] * Math.pow(2, ine));
                    console.log(sumono);
                }
                let w = ansl.length - (onto + 1);

                for (let ins = onto + 1, inr = 1; ins < ansl.length, inr <= w; ins++, inr++) {
                    sumino = sumino + (ansl[ins] * Math.pow(2, (-inr)));
                }
                console.log(sumino);
                let dc01k = sumono + sumino;
                document.getElementById("u").innerHTML = dc01k;
                if (n.startsWith(".")) {
                    document.getElementById("u").innerHTML = sumino;
                }
            }
        }
        else if (n.includes("0") === true || n.includes("1") === true || n.includes("2") === true || n.includes("3") === true || n.includes("4") === true || n.includes("5") === true || n.includes("6") === true || n.includes("7") === true || n.includes("8") === true || n.includes("9") === true || n.includes("A") === true || n.includes("B") === true || n.includes("C") === true || n.includes("D") === true || n.includes("E") === true || n.includes("F") === true ||
            n.includes("a") === true || n.includes("b") === true || n.includes("c") === true || n.includes("d") === true || n.includes("e") === true || n.includes("f") === true) {
            let bint = parseInt(n, 16).toString(10);
            document.getElementById("u").innerHTML = bint;
        } else {
            alert("Please, enter Hexadecimal Number to avoid wrong output");
            document.getElementById("u").innerHTML = "";
        }
        if (n.includes("H") === true || n.includes("I") === true || n.includes("J") === true || n.includes("K") === true || n.includes("L") === true || n.includes("M") === true || n.includes("N") === true || n.includes("O") === true || n.includes("P") === true || n.includes("Q") === true || n.includes("R") === true || n.includes("S") === true || n.includes("T") === true || n.includes("U") === true || n.includes("V") === true || n.includes("W") === true || n.includes("X") === true || n.includes("Y") === true || n.includes("Z") === true || n.includes("g") === true || n.includes("h") === true || n.includes("i") === true || n.includes("j") === true || n.includes("k") === true || n.includes("l") === true || n.includes("m") === true || n.includes("n") === true || n.includes("o") === true || n.includes("p") === true || n.includes("q") === true || n.includes("r") === true || n.includes("s") === true || n.includes("t") === true || n.includes("u") === true || n.includes("v") === true || n.includes("w") === true || n.includes("G") === true || n.includes("x") === true || n.includes("y") === true || n.includes("z") === true || n.includes("[") === true || n.includes("]") === true || n.includes("}") === true || n.includes("{") === true || n.includes("!") === true || n.includes("@") === true || n.includes("#") === true || n.includes("$") === true || n.includes("%") === true || n.includes("^") === true || n.includes("&") === true || n.includes("*") === true || n.includes("-") === true || n.includes("_") === true || n.includes("+") === true || n.includes("/") === true || n.includes("|") === true || n.includes(",") === true || n.includes(">") === true || n.includes("<") === true || n.includes("?") === true) {
            alert("Please, enter Hexadecimal Number to avoid wrong output");
            document.getElementById("u").innerHTML = "";
        }
    }
    else if (m.localeCompare(j) == 0 && l.localeCompare(i) == 0) {
        let n = document.getElementById("a").value;
        let lom = n.split("");
        let k = ["0", "1", "."];

        if (n.includes(".")) {
            let onto = 0;
            for (let ind = 0; ind < lom.length; ind++) {
                if (lom[ind] === k[2]) {
                    onto = ind;
                    
                }
            }
            let dren = n.split(".");
            let ses1 = parseInt(dren[0], 16).toString(2);
            let sas = parseInt(dren[1], 16).toString(2);
            let wnl = sas.length;

            let vri = 4;
            let zep = ["0", "00", "000"];

            if (vri != 0 && wnl % vri == 0) {

                let ansm = ses1 + "." + sas;
                let went = ansm.split(".");
                let wnj = went[1].length;
                let vro = 3;
                let ze = ["0", "00"];
                let resm = parseInt(went[0], 2).toString(8);
                if (vro != 0 && wnj % vro == 0) {
                    let resn = parseInt(went[1], 2).toString(8);
                    let resg = `${resm}.${resn}`;
                    document.getElementById("u").innerHTML = resg;
                    if (n.startsWith(".")) {
                        document.getElementById("u").innerHTML = "0." + resn;
                    }
                }
                else if (vro != 0 && wnj % vro == 1) {
                    let con1z = went[1].concat(ze[1]);
                    let rest = parseInt(con1z, 2).toString(8);
                    let res5f = `${resm}.${rest}`;
                    document.getElementById("u").innerHTML = res5f;
                    if (n.startsWith(".")) {
                        document.getElementById("u").innerHTML = "0." + rest;
                    }

                }
                else if (vro != 0 && wnj % vro == 2) {
                    let con2z = went[1].concat(ze[0]);
                    let res6z = parseInt(con2z, 2).toString(8);
                    let res7z = `${resm}.${res6z}`;
                    document.getElementById("u").innerHTML = res7z;
                    if (n.startsWith(".")) {
                        document.getElementById("u").innerHTML = "0." + res6z;
                    }
                }
            }

            if (vri != 0 && wnl % vri == 1) {
                let zeo = zep[2].concat(sas);
                let ansn = ses1 + "." + zeo;
                let wenn = ansn.split(".");
                let wnjm = wenn[1].length;
                let vroz = 3;
                let zez = ["0", "00"];
                let resmz = parseInt(wenn[0], 2).toString(8);
                if (vroz != 0 && wnjm % vroz == 0) {
                    let resnt = parseInt(wenn[1], 2).toString(8);
                    let resgh = `${resmz}.${resnt}`;
                    document.getElementById("u").innerHTML = resgh;
                    if (n.startsWith(".")) {
                        document.getElementById("u").innerHTML = "0." + resnt;
                    }
                }
                else if (vroz != 0 && wnjm % vroz == 1) {
                    let con1ze = wenn[1].concat(zez[1]);
                    let restd = parseInt(con1ze, 2).toString(8);
                    let res5f1 = `${resmz}.${restd}`;
                    document.getElementById("u").innerHTML = res5f1;
                    if (n.startsWith(".")) {
                        document.getElementById("u").innerHTML = "0." + restd;
                    }

                }
                else if (vroz != 0 && wnjm % vroz == 2) {
                    let con2zz = wenn[1].concat(zez[0]);
                    let res6zz = parseInt(con2zz, 2).toString(8);
                    let res7zz = `${resmz}.${res6zz}`;
                    document.getElementById("u").innerHTML = res7zz;
                    if (n.startsWith(".")) {
                        document.getElementById("u").innerHTML = "0." + res6zz;
                    }
                }


            }
            if (vri != 0 && wnl % vri == 2) {
                let zeog = zep[1].concat(sas);
                let ansn1 = ses1 + "." + zeog;
                let wenn1 = ansn1.split(".");
                let wnjma = wenn1[1].length;
                let vroza = 3;
                let zeza = ["0", "00"];
                let resmzq = parseInt(wenn1[0], 2).toString(8);
                if (vroza != 0 && wnjma % vroza == 0) {
                    let resntc = parseInt(wenn1[1], 2).toString(8);
                    let resghc = `${resmzq}.${resntc}`;
                    document.getElementById("u").innerHTML = resghc;
                    if (n.startsWith(".")) {
                        document.getElementById("u").innerHTML = "0." + resntc;
                    }
                }
                else if (vroza != 0 && wnjma % vroza == 1) {
                    let con1zea = wenn1[1].concat(zeza[1]);
                    let restda = parseInt(con1zea, 2).toString(8);
                    let res5f1a = `${resmzq}.${restda}`;
                    document.getElementById("u").innerHTML = res5f1a;
                    if (n.startsWith(".")) {
                        document.getElementById("u").innerHTML = "0." + restda;
                    }

                }
                else if (vroza != 0 && wnjma % vroza == 2) {
                    let con2zzv = wenn1[1].concat(zeza[0]);
                    let res6zzv = parseInt(con2zzv, 2).toString(8);
                    let res7zzv = `${resmzq}.${res6zzv}`;
                    document.getElementById("u").innerHTML = res7zzv;
                    if (n.startsWith(".")) {
                        document.getElementById("u").innerHTML = "0." + res6zzv;
                    }
                }
            }
            if (vri != 0 && wnl % vri == 3) {
                let zeoga = zep[0].concat(sas);
                let ansn1a = ses1 + "." + zeoga;
                let wenn1x = ansn1a.split(".");
                let wnjmax = wenn1x[1].length;
                let vrozax = 3;
                let zezax = ["0", "00"];
                let resmzc = parseInt(wenn1x[0], 2).toString(8);
                if (vrozax != 0 && wnjmax % vrozax == 0) {
                    let resntcx = parseInt(wenn1x[1], 2).toString(8);
                    let resghcx = `${resmzc}.${resntcx}`;
                    document.getElementById("u").innerHTML = resghcx;
                    if (n.startsWith(".")) {
                        document.getElementById("u").innerHTML = "0." + resntcx;
                    }
                }
                else if (vrozax != 0 && wnjmax % vrozax == 1) {
                    let con1zeax = wenn1x[1].concat(zezax[1]);
                    let restdax = parseInt(con1zeax, 2).toString(8);
                    let res5f1ax = `${resmzc}.${restdax}`;
                    document.getElementById("u").innerHTML = res5f1ax;
                    if (n.startsWith(".")) {
                        document.getElementById("u").innerHTML = "0." + restdax;
                    }

                }
                else if (vrozax != 0 && wnjmax % vrozax == 2) {
                    let con2zzvx = wenn1x[1].concat(zezax[0]);
                    let res6zzvx = parseInt(con2zzvx, 2).toString(8);
                    let res7zzvx = `${resmzc}.${res6zzvx}`;
                    document.getElementById("u").innerHTML = res7zzvx;
                    if (n.startsWith(".")) {
                        document.getElementById("u").innerHTML = "0." + res6zzvx;
                    }
                }
            }
        }
        else if (n.includes("0") === true || n.includes("1") === true || n.includes("2") === true || n.includes("3") === true || n.includes("4") === true || n.includes("5") === true || n.includes("6") === true || n.includes("7") === true || n.includes("8") === true || n.includes("9") === true || n.includes("A") === true || n.includes("B") === true || n.includes("C") === true || n.includes("D") === true || n.includes("E") === true || n.includes("F") === true ||
            n.includes("a") === true || n.includes("b") === true || n.includes("c") === true || n.includes("d") === true || n.includes("e") === true || n.includes("f") === true) {
            let bin = parseInt(n, 16).toString(8);
            document.getElementById("u").innerHTML = bin;
        }
        else {
            alert("Please, enter Hexadecimal Number to avoid wrong output");
            document.getElementById("u").innerHTML = "";
        }
        if (n.includes("H") === true || n.includes("I") === true || n.includes("J") === true || n.includes("K") === true || n.includes("L") === true || n.includes("M") === true || n.includes("N") === true || n.includes("O") === true || n.includes("P") === true || n.includes("Q") === true || n.includes("R") === true || n.includes("S") === true || n.includes("T") === true || n.includes("U") === true || n.includes("V") === true || n.includes("W") === true || n.includes("X") === true || n.includes("Y") === true || n.includes("Z") === true || n.includes("g") === true || n.includes("h") === true || n.includes("i") === true || n.includes("j") === true || n.includes("k") === true || n.includes("l") === true || n.includes("m") === true || n.includes("n") === true || n.includes("o") === true || n.includes("p") === true || n.includes("q") === true || n.includes("r") === true || n.includes("s") === true || n.includes("t") === true || n.includes("u") === true || n.includes("v") === true || n.includes("w") === true || n.includes("G") === true || n.includes("x") === true || n.includes("y") === true || n.includes("z") === true || n.includes("[") === true || n.includes("]") === true || n.includes("}") === true || n.includes("{") === true || n.includes("!") === true || n.includes("@") === true || n.includes("#") === true || n.includes("$") === true || n.includes("%") === true || n.includes("^") === true || n.includes("&") === true || n.includes("*") === true || n.includes("-") === true || n.includes("_") === true || n.includes("+") === true || n.includes("/") === true || n.includes("|") === true || n.includes(",") === true || n.includes(">") === true || n.includes("<") === true || n.includes("?") === true) {
            alert("Please, enter Hexadecimal Number to avoid wrong output");
            document.getElementById("u").innerHTML = "";
        }
    }
    document.getElementById("a").value = "";
    document.getElementById("users").selectedIndex = 0;
    document.getElementById("users").getElementsByTagName("option")[0].value = "From:";
    document.getElementById("users1").selectedIndex = 0;
    document.getElementById("users1").getElementsByTagName("option")[0].value = "To:";
}  
