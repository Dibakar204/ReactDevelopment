import PageBanner from '../components/PageBanner'
import Contact from '../components/Contact'
import { banners } from '../data/banners'

export default function ContactPage() {
  return (
    <>
      <PageBanner
        label="Contact"
        title="Begin your healing journey"
        description="Book a consultation or reach out with questions. We respond within one business day."
        image={banners.contact}
      />
      <Contact hideHeader />
    </>
  )
}
