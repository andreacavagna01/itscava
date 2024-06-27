import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export function Appointment() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view'
      });
    })();
  }, []);
  return (
    <Cal
      calLink="andrea-cavagna/30min"
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view' }}
    />
  );
}
