import aboutImg from '../assets/about-brenda.jpg'
import gallery2 from '../assets/gallery-2.jpg'
import gallery3 from '../assets/gallery-3.jpg'
import gallery4 from '../assets/gallery-4.jpg'
import dadBaby from '../assets/dad-baby.jpg'

const galleryImages = [
  { src: gallery2, alt: 'תינוק על הבטן בליווי הידיים של ברנדה', w: 1200, h: 1600 },
  { src: gallery4, alt: 'תינוק בתנוחת תינוק שמח', w: 1200, h: 1600 },
  { src: gallery3, alt: 'אמא ותינוק על כדור הפיזיו בסדנה', w: 1200, h: 1600 },
  { src: dadBaby, alt: 'אבא עם תינוק במפגש אבות', w: 903, h: 1600 },
]

export default function About() {
  return (
    <section
      id="about"
      className="px-5 py-[68px] border-y"
      style={{ background: '#FFFDF8', borderColor: '#EDE6DA' }}
    >
      <div className="max-w-[1000px] mx-auto grid gap-11 md:grid-cols-2 items-start">
        {/* Photos */}
        <div className="flex flex-col gap-3.5">
          <img
            src={aboutImg}
            alt="ברנדה, מלווה התפתחותית ומדריכת עיסוי תינוקות"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full max-w-[300px] rounded-full object-cover block"
            style={{ aspectRatio: '1 / 1' }}
          />
          <div style={{ columns: 2, columnGap: 10 }}>
            {galleryImages.map((g) => (
              <img
                key={g.alt}
                src={g.src}
                alt={g.alt}
                width={g.w}
                height={g.h}
                loading="lazy"
                className="w-full h-auto rounded-[14px] mb-2.5 block"
              />
            ))}
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-4">
          <p className="m-0 text-xl font-light" style={{ color: '#818267' }}>היי,</p>
          <h2 className="m-0 -mt-2.5 text-[36px] sm:text-[40px] font-black" style={{ color: '#A35C3D' }}>
            אני ברנדה
          </h2>
          <p className="m-0 text-sm font-bold" style={{ color: '#818267', lineHeight: 1.6 }}>
            מלווה התפתחותית מוסמכת · מדריכת עיסוי תינוקות · בהכשרה להדרכת הורים, ייעוץ שינה וגמילה מחיתולים
          </p>
          <p className="m-0 text-[16.5px]" style={{ color: '#3A352E', lineHeight: 1.75 }}>
            נולדתי בארגנטינה, גרתי רוב חיי במדריד, והיום אני כאן ומלווה אמהות ותינוקות מהסטודיו שלי ברמת גן. כל החיים חיפשתי את הייעוד שלי, ומצאתי אותו ברגע שגיליתי את עולם ההתפתחות והמגע של תינוקות.
          </p>
          <p className="m-0 text-[16.5px]" style={{ color: '#3A352E', lineHeight: 1.75 }}>
            אני מאמינה שכל אמא צריכה מעטפת תומכת, במיוחד בחודשים הראשונים שאחרי הלידה - תקופה כל כך מטלטלת. אני כאן כדי לתת לכן את הכלים, את ההקשבה ואת ה"מימו" הזה: לדעת שמישהי מקשיבה, מבינה ועונה על כל שאלה או דאגה.
          </p>
          {/* The heart of the brand — highlighted in a rosa card */}
          <p
            className="m-0 text-[16.5px] rounded-[20px] px-5 py-[18px]"
            style={{ color: '#3A352E', lineHeight: 1.75, background: '#EADBDD' }}
          >
            "מימו" (Mimo) בספרדית פירושו "ליטוף", וזו בדיוק המהות של המרחב שלנו: לתת לכן ולבייביז שלכן מלא מימו - דרך מגע, תנועה, תיווך, הבנה ותמיכה.
          </p>
          <a
            href="#lead"
            className="self-start text-[15px] font-extrabold underline underline-offset-4"
            style={{ color: '#A35C3D' }}
          >
            בואי נדבר ←
          </a>
        </div>
      </div>
    </section>
  )
}
