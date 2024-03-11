export default function (date){
  const newDate = new Date(date);
  return new Intl.DateTimeFormat('pt-BR',
  {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'America/Sao_Paulo'
  })
  .format(newDate);
}