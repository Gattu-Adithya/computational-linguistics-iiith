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
	function Language()
{

     language = document.getElementById("select-lang").value;

    if(language==='eng')
    {
            //emptying the fields while switching between languages(english/hindi)
            document.getElementById("msgFormedSentence").innerHTML="";
            document.getElementById("selectedWord").innerHTML ="";
            document.getElementById("reformButton").innerHTML = "";
            document.getElementById("check-correctness").innerHTML="";
            document.getElementById("correct").innerHTML="";
            document.getElementById("wrong").innerHTML="";
            document.getElementById("showAnswer").innerHTML="";

           
           
             //array with all 10 different english sentences
             allEnglish = [english1,english2,english3,english4,english5,english6,english7,english8,english9,english10];

            //printing message --Form a sentence (Declarative or Interrogative or any other type) from the given words
            document.getElementById("sentence-intro").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
           
            // printing message "(select the buttons in proper order)"
            document.getElementById("button-select-intro").innerHTML="(select the buttons in proper order)";
            document.getElementById("sentence-intro").style.color="blue";
            document.getElementById("sentence-intro").style.fontSize="100%";
            document.getElementById("button-select-intro").style.color="blue";
           
            // randomly accessing 1 english sentence among 10 english sentences
             randomEnglish = allEnglish[Math.floor(Math.random() * allEnglish.length)];

            //randomly selecting 1 sentence among the correct sentence of same question
             randomEnglishSentence = randomEnglish[Math.floor(Math.random() * randomEnglish.length)];
            //console.log(randomEnglishSentence)
           
            //randomizing words
            var arrwords=randomEnglishSentence.split(" ");
            var words=[];
            var k=0,m=0;
            while(arrwords.length>k)
            { m = Math.floor(Math.random() * arrwords.length);
                if(arrwords[m]!="no"){
                words[k]=arrwords[m];
                arrwords[m]="no";
                k++;
                }
            }

            //displaying random buttons
            var i=0;
            count=0;
            wordcount = words.length
            document.getElementById("jumbled-words").innerHTML=" "
            for(i=0;i<wordcount;i++)
            {
                document.getElementById("jumbled-words").innerHTML += "<button class='btn' id='btn"+i+"' value='"+words[i]+"' onclick='Bfunction(this.id,this.value);'>"+words[i]+"</button>";  
            }


            //all the jumbled buttons are stored to display them in same random/jumbled order when reform button is clicked.
             reformButtons=document.getElementById("jumbled-words").innerHTML ;
    }
       

    else if(language==='hindi')
    {  

                //emptying the string data while switching between languages(english/hindi)
                document.getElementById("msgFormedSentence").innerHTML="";
                document.getElementById("selectedWord").innerHTML ="";
                document.getElementById("reformButton").innerHTML = "";
                document.getElementById("check-correctness").innerHTML="";
                document.getElementById("jumbled-words").innerHTML=" "
                document.getElementById("correct").innerHTML="";
                document.getElementById("wrong").innerHTML="";
                document.getElementById("showAnswer").innerHTML="";


            //array with all 7 different hindi sentences
                    allHindi = [hindi1,hindi2,hindi3,hindi4,hindi5,hindi6,hindi7];
           
            //printing message --Form a sentence (Declarative or Interrogative or any other type) from the given words
            document.getElementById("sentence-intro").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
           
            // printing message "(select the buttons in proper order)"
            document.getElementById("button-select-intro").innerHTML="(select the buttons in proper order)";
            document.getElementById("sentence-intro").style.color="rgb(41, 41, 196)";
            document.getElementById("sentence-intro").style.fontSize="100%";
            document.getElementById("button-select-intro").style.color="rgb(41, 41, 196)";

            // randomly accessing 1 hindi sentence among 7 hindi sentences
                randomHindi = allHindi[Math.floor(Math.random() * allHindi.length)];

            //randomly selecting 1 sentence among the correct sentence of same question
                randomHindiSentence = randomHindi[Math.floor(Math.random() * randomHindi.length)];
            //console.log(randomHindiSentence)
           
            //randomizing words
            var arrwords=randomHindiSentence.split(" ");
            var words=[];
            var k=0,m=0;
            while(arrwords.length>k)
            { m = Math.floor(Math.random() * arrwords.length);
                if(arrwords[m]!="no"){
                words[k]=arrwords[m];
                arrwords[m]="no";
                k++;
                }
            }

            //displaying random buttons
            var i=0;
            count=0;
            wordcount = words.length
           
            for(i=0;i<wordcount;i++)
            {
                document.getElementById("jumbled-words").innerHTML += "<button class='btn' id='btn"+i+"' value='"+words[i]+"' onclick='Bfunction(this.id,this.value);'>"+words[i]+"</button>";
                //console.log(words[i]);
            }

            //all the jumbled buttons are stored to display them in same random/jumbled order when reform button is clicked
                reformButtons=document.getElementById("jumbled-words").innerHTML;
               
        }
    else
        {
            // when english or hindi language is not selected then everything will hidden/emptied
            document.getElementById("button-select-intro").innerHTML="";
            document.getElementById("sentence-intro").innerHTML="";
            document.getElementById("msgFormedSentence").innerHTML="";
            document.getElementById("selectedWord").innerHTML ="";
            document.getElementById("reformButton").innerHTML = "";
            document.getElementById("check-correctness").innerHTML="";
            document.getElementById("jumbled-words").innerHTML=" "
            document.getElementById("correct").innerHTML="";
            document.getElementById("wrong").innerHTML="";
            document.getElementById("showAnswer").innerHTML="";
            alert("Please Select A Language.");

        }  
}
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
function reform()
    {   //resets all displayed info
        //console.log(reformButtons);
        document.getElementById("jumbled-words").innerHTML = reformButtons;
        document.getElementById("msgFormedSentence").innerHTML="";
        document.getElementById("selectedWord").innerHTML ="";
        document.getElementById("reformButton").innerHTML = "";
        count=0;
        document.getElementById("check-correctness").innerHTML="";
        document.getElementById("correct").innerHTML="";
        document.getElementById("wrong").innerHTML="";
        document.getElementById("showAnswer").innerHTML=""

    }
   function check()
    {
        var result= selectedSentence.trim();
       
        if(language=='eng')
        {
            if (randomEnglish.includes(result))
            {
            document.getElementById("correct").innerHTML="Correct Answer!!!";
            document.getElementById("wrong").innerHTML="";
            document.getElementById("showAnswer").innerHTML=""

            }
            else{
                document.getElementById("wrong").innerHTML="Wrong Answer !!!";
                document.getElementById("correct").innerHTML="";
                document.getElementById("showAnswer").innerHTML="<button id='show' onclick='show(this.id)'>Get Correct Sentence</button>"
            }
        }
        else if(language=='hindi')
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
                document.getElementById("correct").innerHTML="Correct Answer!!!";
                document.getElementById("wrong").innerHTML="";
                document.getElementById("showAnswer").innerHTML=""

            }
            else{
                document.getElementById("wrong").innerHTML="Wrong Answer!!!";
                document.getElementById("correct").innerHTML="";
                document.getElementById("showAnswer").innerHTML="<button id='getCorrectSentence' onclick='show(this.id)'>Get Correct Sentence</button>"

            }
        }
    }
 function check()
    {
        var result= selectedSentence.trim();
       
        if(language=='eng')
        {
            if (randomEnglish.includes(result))
            {
            document.getElementById("correct").innerHTML="Correct Answer!!!";
            document.getElementById("wrong").innerHTML="";
            document.getElementById("showAnswer").innerHTML=""

            }
            else{
                document.getElementById("wrong").innerHTML="Wrong Answer !!!";
                document.getElementById("correct").innerHTML="";
                document.getElementById("showAnswer").innerHTML="<button id='show' onclick='show(this.id)'>Get Correct Sentence</button>"
            }
        }
        else if(language=='hindi')
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
                document.getElementById("correct").innerHTML="Correct Answer!!!";
                document.getElementById("wrong").innerHTML="";
                document.getElementById("showAnswer").innerHTML=""

            }
            else{
                document.getElementById("wrong").innerHTML="Wrong Answer!!!";
                document.getElementById("correct").innerHTML="";
                document.getElementById("showAnswer").innerHTML="<button id='getCorrectSentence' onclick='show(this.id)'>Get Correct Sentence</button>"

            }
        }
    }

