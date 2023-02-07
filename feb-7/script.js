let randSimbol = ["კატა",77,11,"პური",88];
function arrayTest(anyArray){
    for (let i=0; i<anyArray.length; i++)
    {
        if (isNaN(anyArray[i]))
        {
            document.write("მასივში არსებული ელემენტი: " + anyArray[i] + "-არ შეიცავს ციფრებს"+"</br>");
        }else{
            document.write("მასივში არსებული ელემენტი:" + anyArray[i] +"-შეიცავს ციფრს" + "</br>");
        }

    }
}
arrayTest(randSimbol);