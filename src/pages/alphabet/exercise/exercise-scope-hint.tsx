import { HintText } from '@/components/hint-text';
import { DAKUTEN_MARK, HANDAKUTEN_MARK } from '@/constants/kana-terminology.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

export function ExerciseScopeHint() {
  const { t } = useTranslation();

  return (
    <HintText>
      {t('exercise.scopeLegend', { dakuten: DAKUTEN_MARK, handakuten: HANDAKUTEN_MARK })}
    </HintText>
  );
}
