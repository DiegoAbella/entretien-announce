import type { BaseTranslation } from '../i18n-types'

const fr: BaseTranslation = {
   subject: 'Rapport de billetterie pour {interval:Interval|subjectReportInterval}'
   greeting: 'Cher/Chère {name:string},',
   preamble: `Voici le résumé de l'activité des tickets Jira pour la période {month:DateTime|monthYear}`,
   issue: {
     age: {
       header: 'Ticket age',
       value: '{duration:Duration|durationInDays}'
     },
     key: {
       header: 'No. du Ticket'
     },
     status: {
       header: 'Statut'
     },
     summary: {
       header: 'Sommaire',
     }
   },
   missingValue: "Inconnu",
   outtro: [
     'Ce courriel a été envoyé par un système automatisé. ',
     'Si vous ne désirez pas recevoir ces messages, veuillez svp contacter Daniil.'
   ].join(''),
   created: {
     heading: "Tickets créés entre le {start:DateTime|dtHeader} et le {end:DateTime|dtHeader}"
   },
   allTickets: {
     heading: "Tous les tickets ouverts"
   },
   closed: {
     heading: "Tickets fermés entre le {start:DateTime|dtHeader} et le {end:DateTime|dtHeader}"
   },
}

export default fr
