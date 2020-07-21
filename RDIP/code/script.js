var lan1;
var refbutt;
var WdCount=0;
var cout=0;
var allEng=[];
var allhi=[];
var RES;
var RHS;
var randEng;
var ranhi;



            var en1 = ['John ate an apple before afternoon',
                            'before afternoon John ate an apple',
                            'John before afternoon ate an apple'
                            ];
            var en2 = ['some students like to study in the night',
                            'at night some students like to study'
                           ];
            var en3 = ['John and Mary went to church',
                            'Mary and John went to church'];
            var en4 = ['John went to church after eating',
                            'after eating John went to church',
                            'John after eating went to church'];
            var en5 = ['did he go to market',
                            'he did go to market'];
            var en6 = ['the woman who called my sister sells cosmetics',
                            'the woman who sells cosmetics called my sister',
                            'my sister who sells cosmetics called the woman',
                            'my sister who called the woman sells cosmetics'];
            var en7 = ['John goes to the library and studies',
                            'John studies and goes to the library'];
            var en8 = ['John ate an apple so did she',
                            'she ate an apple so did John'];
            var en9 = ['the‌ ‌teacher‌ ‌returned‌ ‌the‌ ‌book‌ ‌after‌ ‌she‌ ‌noticed‌ ‌the‌ ‌error‌',
                            'the‌ ‌teacher‌ ‌noticed‌ ‌the‌ ‌error‌ ‌after‌ ‌she‌ ‌returned‌ ‌the‌ ‌book‌',
                            'after‌ ‌the‌ ‌teacher‌ ‌returned‌ ‌the‌ ‌book‌ ‌she‌ ‌noticed‌ ‌the‌ ‌error‌',
                            'after‌ ‌the‌ ‌teacher‌ ‌noticed‌ ‌the‌ ‌error‌ ‌she‌ ‌returned‌ ‌the‌ ‌book‌',
                            'she‌ ‌returned‌ ‌the‌ ‌book‌ ‌after‌ ‌the‌ ‌teacher‌ ‌noticed‌ ‌the‌ ‌error‌',
                            'she‌ ‌noticed‌ ‌the‌ ‌error‌ ‌after‌ ‌the‌ ‌teacher‌ ‌returned‌ ‌the‌ ‌book‌',
                            'after‌ ‌she‌ ‌returned‌ ‌the‌ ‌book‌ ‌the‌ ‌teacher‌ ‌noticed‌ ‌the‌ ‌error‌',
                            'after‌ ‌she‌ ‌noticed‌ ‌the‌ ‌error‌ ‌the‌ ‌teacher‌ ‌returned‌ ‌the‌ ‌book‌'];
            var en10 = ['I‌ ‌told‌ ‌her‌ ‌that‌ ‌I‌ ‌bought‌ ‌a‌ ‌book‌ ‌yesterday‌',
                             'I‌ ‌told‌ ‌her‌ ‌yesterday‌ ‌that‌ ‌I‌ ‌bought‌ ‌a‌ ‌book‌',
                             'yesterday‌ ‌I‌ ‌told‌ ‌her‌ ‌that‌ ‌I‌ ‌bought‌ ‌a‌ ‌book‌',
                             'I‌ ‌bought‌ ‌a‌ ‌book‌ ‌that‌ ‌I‌ ‌told‌ ‌her‌ ‌yesterday‌',
                             'I‌ ‌bought‌ ‌a‌ ‌book‌ ‌yesterday‌ ‌that‌ ‌I‌ ‌told‌ ‌her‌',
                             'yesterday‌ ‌I‌ ‌bought‌ ‌a‌ ‌book‌ ‌that‌ ‌I‌ ‌told‌ ‌her‌'];

 
                var hi1 = ['राम‌ ‌और‌ ‌श्याम‌ ‌बाजार‌ ‌गयें‌',
                    'राम‌ ‌और‌ ‌श्याम‌ ‌गयें‌ ‌बाजार‌',
                    'बाजार‌ ‌गयें‌ ‌राम‌ ‌और‌ ‌श्याम‌',
                    'गयें‌ ‌बाजार‌ ‌राम‌ ‌और‌ ‌श्याम‌'];
                var hi2 = ['राम‌ ‌सोया‌ ‌और‌ ‌श्याम‌ ‌भी‌',
                    'श्याम‌ ‌सोया‌ ‌और‌ ‌राम‌ ‌भी‌',
                    'सोया‌ ‌श्याम‌ ‌और‌ ‌राम‌ ‌भी‌',
                    'सोया‌ ‌राम‌ ‌और‌ ‌श्याम‌ ‌भी‌'];
                var hi3 = ['मैंने‌ ‌उसे‌ ‌बताया‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'मैंने‌ ‌उसे‌ ‌बताया‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'उसे‌ ‌मैंने‌ ‌बताया‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'उसे‌ ‌मैंने‌ ‌बताया‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'मैंने‌ ‌बताया‌ ‌उसे‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'मैंने‌ ‌बताया‌ ‌उसे‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'उसे‌ ‌बताया‌ ‌मैंने‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'उसे‌ ‌बताया‌ ‌मैंने‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'बताया‌ ‌मैंने‌ ‌उसे‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'बताया‌ ‌मैंने‌ ‌उसे‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'बताया‌ ‌उसे‌ ‌मैंने‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'बताया‌ ‌उसे‌ ‌मैंने‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌'];
                var hi4 = ['राम‌ ‌खाकर‌ ‌सोया‌',
                    'खाकर‌ ‌राम‌ ‌सोया‌',
                    'राम‌ ‌सोया‌ ‌खाकर‌',
                    'खाकर‌ ‌सोया‌ ‌राम‌',
                    'सोया‌ ‌राम‌ ‌खाकर‌',
                    'सोया‌ ‌खाकर‌ ‌राम‌'];
                var hi5 = ['बिल्लियों‌ ‌को‌ ‌मारकर‌ ‌कुत्ता‌ ‌सो‌ ‌गया‌',
                    'मारकर‌ ‌बिल्लियों‌ ‌को‌ ‌कुत्ता‌ ‌सो‌ ‌गया',
                    'बिल्लियों‌ ‌को‌ ‌मारकर‌ ‌सो‌ ‌गया‌ ‌कुत्ता‌',
                    'मारकर‌ ‌बिल्लियों‌ ‌को‌ ‌सो‌ ‌गया‌ ‌कुत्ता‌',
                    'कुत्ता‌ ‌सो‌ ‌गया‌ ‌बिल्लियों‌ ‌को‌ ‌मारकर‌',
                    'कुत्ता‌ ‌सो‌ ‌गया‌ ‌मारकर‌ ‌बिल्लियों‌ ‌को‌',
                    'सो‌ ‌गया‌ ‌कुत्ता‌ ‌बिल्लियों‌ ‌को‌ ‌मारकर',
                    'सो‌ ‌गया‌ ‌कुत्ता‌ ‌मारकर‌ ‌बिल्लियों‌ ‌को‌'];
                var hi6 = ['एक‌ ‌लाल‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                    'एक‌ ‌लाल‌ ‌किताब‌ ‌है‌ ‌वहाँ‌',
                    'वहाँ‌ ‌है‌ ‌एक‌ ‌लाल‌ ‌किताब',
                    'है‌ ‌वहाँ‌ ‌एक‌ ‌लाल‌ ‌किताब'];
                var hi7 = ['एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                    'एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌ ‌है‌ ‌वहाँ‌',
                    'बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                    '‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌ ‌है‌ ‌वहाँ',
                    'वहाँ‌ ‌है‌ ‌एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌',
                    'वहाँ‌ ‌है‌ ‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌',
                    '‌है‌ ‌वहाँ‌ ‌एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌',
                    'है‌ ‌वहाँ‌ ‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌'];

        var hiALL=[
                    'राम‌ ‌और‌ ‌श्याम‌ ‌बाजार‌ ‌गयें‌',
                    'राम‌ ‌और‌ ‌श्याम‌ ‌गयें‌ ‌बाजार‌',
                    'बाजार‌ ‌गयें‌ ‌राम‌ ‌और‌ ‌श्याम‌',
                    'गयें‌ ‌बाजार‌ ‌राम‌ ‌और‌ ‌श्याम‌',
                    'राम‌ ‌सोया‌ ‌और‌ ‌श्याम‌ ‌भी‌',
                    'श्याम‌ ‌सोया‌ ‌और‌ ‌राम‌ ‌भी‌',
                    'सोया‌ ‌श्याम‌ ‌और‌ ‌राम‌ ‌भी‌',
                    'सोया‌ ‌राम‌ ‌और‌ ‌श्याम‌ ‌भी‌',
                    'मैंने‌ ‌उसे‌ ‌बताया‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'मैंने‌ ‌उसे‌ ‌बताया‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'उसे‌ ‌मैंने‌ ‌बताया‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'उसे‌ ‌मैंने‌ ‌बताया‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'मैंने‌ ‌बताया‌ ‌उसे‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'मैंने‌ ‌बताया‌ ‌उसे‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'उसे‌ ‌बताया‌ ‌मैंने‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'उसे‌ ‌बताया‌ ‌मैंने‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'बताया‌ ‌मैंने‌ ‌उसे‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'बताया‌ ‌मैंने‌ ‌उसे‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'बताया‌ ‌उसे‌ ‌मैंने‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                    'बताया‌ ‌उसे‌ ‌मैंने‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                    'राम‌ ‌खाकर‌ ‌सोया‌',
                    'खाकर‌ ‌राम‌ ‌सोया‌',
                    'राम‌ ‌सोया‌ ‌खाकर‌',
                    'खाकर‌ ‌सोया‌ ‌राम‌',
                    'सोया‌ ‌राम‌ ‌खाकर‌',
                    'सोया‌ ‌खाकर‌ ‌राम‌',
                    'बिल्लियों‌ ‌को‌ ‌मारकर‌ ‌कुत्ता‌ ‌सो‌ ‌गया‌',
                    'मारकर‌ ‌बिल्लियों‌ ‌को‌ ‌कुत्ता‌ ‌सो‌ ‌गया',
                    'बिल्लियों‌ ‌को‌ ‌मारकर‌ ‌सो‌ ‌गया‌ ‌कुत्ता‌',
                    'मारकर‌ ‌बिल्लियों‌ ‌को‌ ‌सो‌ ‌गया‌ ‌कुत्ता‌',
                    'कुत्ता‌ ‌सो‌ ‌गया‌ ‌बिल्लियों‌ ‌को‌ ‌मारकर‌',
                    'कुत्ता‌ ‌सो‌ ‌गया‌ ‌मारकर‌ ‌बिल्लियों‌ ‌को‌',
                    'सो‌ ‌गया‌ ‌कुत्ता‌ ‌बिल्लियों‌ ‌को‌ ‌मारकर',
                    'सो‌ ‌गया‌ ‌कुत्ता‌ ‌मारकर‌ ‌बिल्लियों‌ ‌को‌',
                    'एक‌ ‌लाल‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                    'एक‌ ‌लाल‌ ‌किताब‌ ‌है‌ ‌वहाँ‌',
                    'वहाँ‌ ‌है‌ ‌एक‌ ‌लाल‌ ‌किताब',
                    'है‌ ‌वहाँ‌ ‌एक‌ ‌लाल‌ ‌किताब',
                    'एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                    'एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌ ‌है‌ ‌वहाँ‌',
                    'बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                    '‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌ ‌है‌ ‌वहाँ',
                    'वहाँ‌ ‌है‌ ‌एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌',
                    'वहाँ‌ ‌है‌ ‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌',
                    '‌है‌ ‌वहाँ‌ ‌एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌',
                    'है‌ ‌वहाँ‌ ‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌'
        ]

function Lang()
{

     lan1 = document.getElementById("select-lang").value;

    if(lan1==='eng')
    {
           
            document.getElementById("msgformsent").innerHTML="";
            document.getElementById("selectedwd").innerHTML ="";
            document.getElementById("reformButton").innerHTML = "";
            document.getElementById("check-crctness").innerHTML="";
            document.getElementById("crct").innerHTML="";
            document.getElementById("wrng").innerHTML="";
            document.getElementById("shwAns").innerHTML="";

           
           
             
             allEng = [en1,en2,en3,en4,en5,en6,en7,en8,en9,en10];

           
            document.getElementById("sent-intro").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given wd";
           
       
            document.getElementById("butt-sel-int").innerHTML="(select the buttons in proper order)";
            document.getElementById("sent-intro").style.color="blue";
            document.getElementById("sent-intro").style.fontSize="100%";
            document.getElementById("butt-sel-int").style.color="blue";
           
         
             randEng = allEng[Math.floor(Math.random() * allEng.length)];

           
             RES = randEng[Math.floor(Math.random() * randEng.length)];
           
           
           
            var arrwd=RES.split(" ");
            var wd=[];
            var p=0,t=0;
            while(arrwd.length>p)
            { t = Math.floor(Math.random() * arrwd.length);
                if(arrwd[t]!="no"){
                wd[p]=arrwd[t];
                arrwd[t]="no";
                p++;
                }
            }

         
            var i=0;
            cout=0;
            WdCount = wd.length
            document.getElementById("jumbled-wd").innerHTML=" "
            for(i=0;i<WdCount;i++)
            {
                document.getElementById("jumbled-wd").innerHTML += "<button class='btn' id='btn"+i+"' value='"+wd[i]+"' onclick='Bfunc(this.id,this.value);'>"+wd[i]+"</button>";  
            }


         
             refbutt=document.getElementById("jumbled-wd").innerHTML ;
    }
       

    else if(lan1==='hindi')
    {  

             
                document.getElementById("msgformsent").innerHTML="";
                document.getElementById("selectedwd").innerHTML ="";
                document.getElementById("reformButton").innerHTML = "";
                document.getElementById("check-crctness").innerHTML="";
                document.getElementById("jumbled-wd").innerHTML=" "
                document.getElementById("crct").innerHTML="";
                document.getElementById("wrng").innerHTML="";
                document.getElementById("shwAns").innerHTML="";


         
                    allhi = [hi1,hi2,hi3,hi4,hi5,hi6,hi7];
           
           
            document.getElementById("sent-intro").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given wd";
           
           
            document.getElementById("butt-sel-int").innerHTML="(select the buttons in proper order)";
            document.getElementById("sent-intro").style.color="rgb(41, 41, 196)";
            document.getElementById("sent-intro").style.fontSize="100%";
            document.getElementById("butt-sel-int").style.color="rgb(41, 41, 196)";

     
                ranhi = allhi[Math.floor(Math.random() * allhi.length)];

     
                RHS = ranhi[Math.floor(Math.random() * ranhi.length)];
           
           
           
            var arrwd=RHS.split(" ");
            var wd=[];
            var p=0,t=0;
            while(arrwd.length>p)
            { t = Math.floor(Math.random() * arrwd.length);
                if(arrwd[m]!="no"){
                wd[p]=arrwd[t];
                arrwd[t]="no";
                p++;
                }
            }

         
            var i=0;
            cout=0;
            WdCount = wd.length
           
            for(i=0;i<WdCount;i++)
            {
                document.getElementById("jumbled-wd").innerHTML += "<button class='btn' id='btn"+i+"' value='"+wd[i]+"' onclick='Bfunc(this.id,this.value);'>"+wd[i]+"</button>";
               
            }

         
                refbutt=document.getElementById("jumbled-wd").innerHTML;
               
        }
    else
        {
         
            document.getElementById("butt-sel-int").innerHTML="";
            document.getElementById("sent-intro").innerHTML="";
            document.getElementById("msgformsent").innerHTML="";
            document.getElementById("selectedwd").innerHTML ="";
            document.getElementById("reformButton").innerHTML = "";
            document.getElementById("check-crctness").innerHTML="";
            document.getElementById("jumbled-wd").innerHTML=" "
            document.getElementById("crct").innerHTML="";
            document.getElementById("wrng").innerHTML="";
            document.getElementById("shwAns").innerHTML="";
            alert("Please Select A Lang.");

        }  
}
   
    var selectedSentence;
    function Bfunc(bid,bvalue)
        {
           
            document.getElementById("msgformsent").innerHTML="Formed Sentence <span>(after selecting wd):</span>";
            document.getElementById("selectedwd").innerHTML +=bvalue+" ";
            document.getElementById(bid).style.display="none";
            document.getElementById("reformButton").innerHTML = "<button class='reform' id='' onclick='ref()'> Re-form the sentence</button>";
            cout++;
           
            if(WdCount==cout && WdCount>0)
            {
                selectedSentence = document.getElementById("selectedwd").innerHTML;
                document.getElementById("check-crctness").innerHTML="<button id='check' onclick='chk()'>Check Correctness of the Sentence</button>";                
                console.log(selectedSentence);
            }
            else{
                document.getElementById("check-crctness").innerHTML="";  
            }


        }
    function ref()
    {
        document.getElementById("jumbled-wd").innerHTML = refbutt;
        document.getElementById("msgformsent").innerHTML="";
        document.getElementById("selectedwd").innerHTML ="";
        document.getElementById("reformButton").innerHTML = "";
        cout=0;
        document.getElementById("check-crctness").innerHTML="";
        document.getElementById("crct").innerHTML="";
        document.getElementById("wrng").innerHTML="";
        document.getElementById("shwAns").innerHTML=""

    }


 
    var answers="";
    function chk()
    {
        var result= selectedSentence.trim();
       
        if(lan1=='eng')
        {
            if (randEng.includes(result))
            {
            document.getElementById("crct").innerHTML="Correct Answer!!!";
            document.getElementById("wrng").innerHTML="";
            document.getElementById("shwAns").innerHTML=""

            }
            else{
                document.getElementById("wrng").innerHTML="Wrong Answer !!!";
                document.getElementById("crct").innerHTML="";
                document.getElementById("shwAns").innerHTML="<button id='show' onclick='display(this.id)'>Get Correct Sentence</button>"
            }
        }
        else if(lan1=='hindi')
        {var i=0;
            result=result.trim();
            console.log(result)
            for(i=0;i<hindiALL.length;i++)
            { var x=hindiALL[i];
                if(x.localeCompare(result)==0)
                {
                    i=100;
                    console.log(i)
                    break;  
                }    
            }
           
            if(i==100)
            {
                document.getElementById("crct").innerHTML="Correct Answer!!!";
                document.getElementById("wrng").innerHTML="";
                document.getElementById("shwAns").innerHTML=""

            }
            else{
                document.getElementById("wrng").innerHTML="Wrong Answer!!!";
                document.getElementById("crct").innerHTML="";
                document.getElementById("shwAns").innerHTML="<button id='getCorrectSentence' onclick='display(this.id)'>Get Correct Sentence</button>"

            }
        }
    }
   

    function display(id)
    {   var i=0;
        document.getElementById(id).style.display="none";
        document.getElementById("shwAns").innerHTML="<button id='hide' onclick='toglee()'>Hide the Correct Sentences</button>";
       
        answers="";
        if(lan1=="eng")
        {var l=randEng.length;
           
            for(i=0;i<l;i++)
            {  
                console.log(randEng[i])
                document.getElementById("shwAns").innerHTML+="<p>"+randEng[i]+"</p><br>";
                answers+="<p>"+randEng[i]+"</p><br>";
            }  
        }
        if(lan1=="hindi")
        {var i=0;
            for(i=0;i<ranhi.length;i++)
            {
                console.log(ranhi[i])
                document.getElementById("shwAns").innerHTML+="<p>"+ranhi[i]+"</p><br>";
                answers+="<p>"+ranhi[i]+"</p><br>";  
            }
        }

    }
    function toglee()
    {
        if(document.getElementById("hide").innerHTML=='Hide the Correct Sentences')
        {
            document.getElementById("shwAns").innerHTML="";
            document.getElementById("shwAns").innerHTML="<button id='hide' onclick='toglee()'>Get Answers</button>";
       
        }
        else
        {
            document.getElementById("shwAns").innerHTML+=answers;
            document.getElementById("hide").innerHTML="Hide the Correct Sentences";    
        }
    }
