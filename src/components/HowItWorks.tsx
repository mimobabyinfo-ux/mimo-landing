const steps = [
  {
    num: '01',
    title: 'בוחרות את ההתאמה',
    body: 'בוחרות יחד את הליווי שמתאים לכן ולשלב של הבייבי — סדנה קבוצתית או ליווי פרטני בבית.',
  },
  {
    num: '02',
    title: 'נפגשות ולומדות',
    body: 'מפגשים אינטימיים בקבוצה קטנה, עם יחס אישי, מקום לשאלות ותרגול מעשי — בקצב שלכן, בלי לחץ.',
  },
  {
    num: '03',
    title: 'ממשיכות יחד',
    body: 'קבוצת וואטסאפ עם סיכומים וליווי בין המפגשים, קהילה תומכת ומתנה אישית בסיום. אתן לא לבד בדרך.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 sm:px-10" style={{ background: '#EADBDD' }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black" style={{ color: '#A35C3D' }}>
            כל תינוק הוא עולם ומלואו
          </h2>
          <p className="mt-3 text-base max-w-lg mx-auto" style={{ color: '#3A352E' }}>
            כל אמא ובייבי הם עולם בפני עצמו — ולכן הליווי אצלנו אישי, רגוע ומותאם בדיוק לכן.
          </p>
        </div>

        {/* Steps — RTL grid flows right-to-left, so 01 sits on the right */}
        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center gap-3">
              <span
                className="text-6xl font-black opacity-40 leading-none"
                style={{ color: '#A35C3D' }}
              >
                {step.num}
              </span>
              <h3 className="text-base font-black" style={{ color: '#3A352E' }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#3A352E' }}>{step.body}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#services"
            className="inline-block font-bold px-8 py-3.5 rounded-full border-2 transition-all duration-200"
            style={{ borderColor: '#A35C3D', color: '#A35C3D' }}
          >
            קראו עוד
          </a>
        </div>
      </div>
    </section>
  )
}
