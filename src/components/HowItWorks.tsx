const steps = [
  {
    num: '01',
    title: 'ההתפתחות באה לפי גיל',
    body: 'התפתחות בריאה ומאושרת בנוי על פי ביתך כמו גידול בקרב גנים כל מגע.',
  },
  {
    num: '02',
    title: 'זה לא יעבוד לבד — אבל עם מישהו שמבין',
    body: 'סדנאות, ייעוצים פרטיים ולמידה, כל ה-תהליכים התפתחותית הראשוניות שלכם.',
  },
  {
    num: '03',
    title: 'ממשיכים לפי החיים שאתן בונות',
    body: 'ממשיכים לכם עם תהליכים שמשנים בדרכים פרטיות ותחושה הדרך.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 sm:px-10" style={{ background: '#FDFBF7' }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black" style={{ color: '#4A3F35' }}>
            כל תינוק הוא עולם ומלואו
          </h2>
          <p className="mt-3 text-base max-w-lg mx-auto" style={{ color: '#7a6a5a' }}>
            ההתפתחות הטבעית והאישית למסע הקדמות הפיזית שלו קבורה בגנטיקה שלו.
          </p>
        </div>

        {/* Steps — RTL: 03 right, 01 left */}
        <div className="grid sm:grid-cols-3 gap-8">
          {[...steps].reverse().map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center gap-3">
              <span
                className="text-6xl font-black opacity-20 leading-none"
                style={{ color: '#E9C46A' }}
              >
                {step.num}
              </span>
              <h3 className="text-base font-black" style={{ color: '#4A3F35' }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#7a6a5a' }}>{step.body}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#services"
            className="inline-block font-bold px-8 py-3.5 rounded-full border-2 transition-all duration-200"
            style={{ borderColor: '#4A3F35', color: '#4A3F35' }}
          >
            קראו עוד
          </a>
        </div>
      </div>
    </section>
  )
}
