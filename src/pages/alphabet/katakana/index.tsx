import { AlphabetChartPage } from '@/pages/alphabet/alphabet-chart.tsx'
import { katakanaChartRows, katakanaYoonChartRows } from '@/constants/alphabet-charts.ts'
import { useTranslation } from '@/i18n/use-translation.ts'

function KatakanaPage() {
  const { t } = useTranslation()

  return (
    <AlphabetChartPage
      title={t('nav.katakana')}
      description={t('alphabet.katakanaPageDescription')}
      chartRows={katakanaChartRows}
      yoonChartRows={katakanaYoonChartRows}
    />
  )
}

export default KatakanaPage
