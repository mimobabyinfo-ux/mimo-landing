import Reveal from './Reveal'

const steps = [
  {
    num: '01',
    title: 'בוחרות את ההתאמה',
    body: 'בוחרות יחד את הליווי שמתאים לכן ולשלב של הבייבי - סדנה קבוצתית או ליווי פרטני בבית.',
  },
  {
    num: '02',
    title: 'נפגשות ולומדות',
    body: 'מפגשים אינטימיים בקבוצה קטנה, עם יחס אישי, מקום לשאלות ותרגול מעשי - בקצב שלכן, בלי לחץ.',
  },
  {
    num: '03',
    title: 'ממשיכות יחד',
    body: 'קבוצת וואטסאפ עם סיכומים וליווי בין המפגשים, קהילה תומכת ומתנה אישית בסיום. אתן לא לבד בדרך.',
  },
]

export default function HowItWorks() {
  return (
    <section className="px-5 py-16" style={{ background: '#EADBDD' }}>
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <Reveal className="text-center mb-10">
          <h2 className="m-0 mb-2 text-[28px] sm:text-[32px] font-black" style={{ color: '#A35C3D' }}>
            כל תינוק הוא עולם ומלואו
          </h2>
          <p className="m-0 mx-auto max-w-[480px] text-[15.5px]" style={{ color: '#3A352E', lineHeight: 1.6 }}>
            כל אמא ובייבי הם עולם בפני עצמו - ולכן הליווי אצלנו אישי, רגוע ומותאם בדיוק לכן.
          </p>
        </Reveal>

        {/* Steps - RTL grid flows right-to-left, so 01 sits on the right */}
        <div className="grid sm:grid-cols-3 gap-7">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 90} className="flex flex-col gap-2.5">
              <span className="text-[15px] font-black" style={{ color: '#A35C3D', letterSpacing: 1 }}>
                {step.num}
              </span>
              <span style={{ height: 2, background: '#C9A76A80', width: 34 }} />
              <h3 className="m-0 mt-1 text-lg font-black" style={{ color: '#3A352E' }}>{step.title}</h3>
              <p className="m-0 text-[14.5px]" style={{ color: '#5F5A4E', lineHeight: 1.65 }}>{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
