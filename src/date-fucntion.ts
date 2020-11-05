const days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', "Juin", 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

const formatDate = (date: string): string => {
  const dateObject = new Date(date);
  return `${days[dateObject.getDay()]} ${dateObject.getDate()} ${months[dateObject.getMonth()]} ${dateObject.getFullYear()}`;
};

export default formatDate;
