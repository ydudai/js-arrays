**שיעורי בית שיעור 7**

**מערכים:**

1. כתבו פונקציה המקבלת מערך של מספרים וממיינת אותו מהגדול לקטן.
2. כתבו פונקציה המקבלת 2 מערכים. תחזיר מערך רק עם הערכים המשותפים.  
    לדוגמא:  
    מערך 1 – 1,2,1,2,1  
    מערך 2 – 2,2,2,1,3,1,2  
    <br/>הפונקציה תחזיר – 1,2  
    \*רק את הערכים הזהים ב 2 המערכים בלי כפילויות.

\*יש להשתמש בלולאות for בלבד.

\* אסור להשתמש בincludes.

1. כתבו פונקציה המקבלת מטריצה (מערך דו מימדי) ומחזירה את הממוצע של הערכים שלו. – לא נלמד בשיעור, יש לחקור ולהרחיב מעט לבד.
2. כתבו פונקציה שמקבלת מערך של מספרים ומספר בודד, הפונקציה צריכה לבדוק כמה פעמים המספר הבודד קיים במערך של המספרים, בכל פעם שנמצא המספר הבודד בתוך המערך, יש להוציא אותו מהמערך אך ורק באמצעות pop().

**Arrow function:**

1. צרו פונקציה אשר מקבלת מחרוזת ומחזירה ערך בוליאני האם גודלה מעל 5 תווים.
2. צרו פונקציה המקבלת מחרוזת, הפונקציה תבדוק אם התא הראשון והאחרון זהים ותחזיר הודעות בהתאם.
3. צרו פונקציה המקבלת מחרוזת, הפונקציה תבדוק אם התו האחרון הוא אות גדולה, אם כן תחזיר "אמת" אחרת תחזיר "שקר".

**:Map/forEach**

1. צרו תוכנית אשר קולטת מערך המכיל 8 מספרים, התכנית תדפיס את המספרים המתחלקים ב 3 ללא שארית ואת המיקום שלהם במערך.

במידה ואף מספר במערך לא מתחלק ב3 ללא שארית יודפס “The array is not divisible by 3”

1. צרו תוכנית אשר קולטת מערך של אותיות גדולות וקטנות, התוכנית תעבור על איברי המערך ותיצור מערך חדש כאשר כל תא במערך יבדוק האם התא המקביל במערך הקודם היה אות גדולה או קטנה ויציג זאת בהתאם.

U- מייצר אות גדולה uppercase

L- מייצג אות קטנה lowercase

דוגמא:

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8/AwAI/AL+GwXmLwAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//83AwAI9AL6IZQ96QAAAABJRU5ErkJggg==)

1. צרו תוכנית אשר קולטת את המערך הבא: \['a’,’b’,’c’,’d’,’e’,’f'\] , התוכנית תעבור על כל איברי המערך, כל תא הנמצא במיקום זוגי (אינדקס) – יוחלף התוכן לאינדקס עצמו

דוגמה:

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8XAwAI8gL5c60pfQAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8HAwAI7gL35vfCoAAAAABJRU5ErkJggg==)

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8fAwAI+gL9STzyuwAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8vAwAI+AL8ldyzEQAAAABJRU5ErkJggg==)![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8PAwAI9gL7zpsyJAAAAABJRU5ErkJggg==)

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4XmP4//8nAwAI8AL4r01o1wAAAABJRU5ErkJggg==)

**Filter :**

1. צרו פונקציה המקבלת מערך גילאים, התוכנית תיצור מערך חדש רק עם הגילאים שהם מעל 18.
2. צרו פונקציה הקולטת את המערך הבא: \[2,4,1,2,7,2,8\]

הפונקציה תיצור מערך חדש ללא אינדקס 3.

**Spread:**

1. צרו פונקציה המקבלת שם ומוסיפה אותו למערך חיצוני של שמות (מחוץ לפונקציה).
2. צרו תוכנית הקולטת 2 מערכים של שמות, התכנית תיצור מערך אחד מאוחד עם כלל השמות מ 2 המערכים.