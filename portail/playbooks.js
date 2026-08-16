// Bibliothèque de parcours pré-écrits (7 tâches/semaine, 4 semaines) utilisée
// par le générateur d'audit (audit-form.html) ET le bouton "Synchroniser le
// plan" du tableau de bord (dashboard.html). Un seul fichier, pour que les
// deux restent toujours identiques.
const PLAYBOOKS = {
  'Suivi de vos coûts (food cost, marges par plat)': {
    objective: "Reprendre le contrôle du food cost et clarifier les chiffres clés.",
    kpis: ["[HEBDO] Food cost moyen de la semaine", "[HEBDO] Nombre de couverts servis"],
    weeks: [
      ["Lister tous les plats de la carte avec leur coût matière réel.", "Créer un tableau de suivi food cost par plat.", "Former l'équipe cuisine au relevé des pertes.", "Peser les portions types sur 3 plats phares pour vérifier la régularité.", "Identifier les fournisseurs et leurs tarifs actuels pour chaque ingrédient clé.", "Mettre en place une fiche technique standard pour les 5 plats les plus vendus.", "Fixer un rendez-vous hebdomadaire de 15 minutes dédié au suivi food cost."],
      ["Identifier les 3 plats les moins rentables.", "Ajuster les prix ou les portions en conséquence.", "Comparer le coût réel de chaque plat à son prix de vente pour calculer la marge exacte.", "Vérifier si des produits sont trop souvent jetés ou périmés (gaspillage).", "Négocier ou comparer les tarifs d'au moins un fournisseur clé.", "Mettre à jour la carte si un plat s'avère structurellement non rentable.", "Partager les premiers résultats du suivi avec l'équipe cuisine."],
      ["Recouper le food cost réel avec les commandes fournisseurs du mois.", "Repérer les postes de gaspillage principaux.", "Vérifier les quantités commandées vs consommées sur la semaine.", "Ajuster les commandes fournisseurs si des écarts sont identifiés.", "Revoir les portions servies pour les plats à faible marge.", "Sensibiliser l'équipe aux bonnes pratiques anti-gaspillage.", "Mettre à jour le tableau de suivi avec les chiffres de la semaine."],
      ["Point mensuel : revue des chiffres et ajustement du plan.", "Calculer le food cost moyen réel du mois et le comparer à l'objectif.", "Identifier les 2 plats ayant le plus progressé en marge.", "Lister les actions à poursuivre le mois suivant.", "Valider les nouveaux prix ou portions avec l'équipe.", "Archiver les fiches techniques mises à jour.", "Préparer les 3 priorités food cost du mois suivant avec votre DG."]
    ]
  },
  'Organisation de l\'équipe (plannings, rôles clairs)': {
    objective: "Clarifier les rôles et fiabiliser l'organisation de l'équipe.",
    kpis: ["[HEBDO] Heures supplémentaires cumulées", "[HEBDO] Taux d'absentéisme"],
    weeks: [
      ["Lister les rôles et responsabilités actuels de chaque poste.", "Identifier les zones de flou ou de double-charge.", "Interroger chaque membre de l'équipe sur sa compréhension de son rôle.", "Cartographier les compétences disponibles dans l'équipe (polyvalence).", "Repérer les postes les plus sous tension aux heures de rush.", "Vérifier la conformité des contrats et des heures déclarées.", "Fixer les objectifs de la clarification des rôles avec l'équipe."],
      ["Formaliser un planning type par semaine (salle, cuisine).", "Définir un référent par service.", "Équilibrer les plannings entre les jours forts et les jours calmes.", "Prévoir un système de remplacement en cas d'absence imprévue.", "Afficher le planning type dans un endroit visible par toute l'équipe.", "Clarifier les horaires de pause et de coupure.", "Recueillir un premier retour de l'équipe sur ce nouveau planning."],
      ["Mettre en place un point hebdo court avec l'équipe (15 min).", "Recueillir les irritants du terrain.", "Suivre l'application réelle du planning type sur la semaine.", "Ajuster les rôles si des tensions sont remontées.", "Vérifier le respect des temps de pause légaux.", "Identifier un binôme de secours pour chaque poste clé.", "Noter les écarts entre planning prévu et heures réellement faites."],
      ["Ajuster l'organisation selon les retours et fixer la version stable.", "Valider le planning type définitif avec toute l'équipe.", "Calculer le total d'heures supplémentaires du mois.", "Mesurer le taux d'absentéisme du mois.", "Identifier si un recrutement ou une formation est nécessaire.", "Documenter les rôles clarifiés dans un support simple (1 page).", "Fixer les priorités organisation du mois suivant avec votre DG."]
    ]
  },
  'Visibilité en ligne (Google, réseaux sociaux, avis)': {
    objective: "Reprendre la main sur votre visibilité en ligne.",
    kpis: ["[HEBDO] Nouveaux avis Google", "[HEBDO] Vues de la fiche établissement"],
    weeks: [
      ["Mettre à jour la fiche Google Business (photos, horaires, menu).", "Répondre aux avis récents.", "Vérifier que l'adresse, le téléphone et le site web sont exacts sur la fiche.", "Ajouter au moins 5 photos récentes et représentatives (plats, salle, équipe).", "Vérifier les catégories et attributs renseignés sur la fiche Google.", "Identifier vos comptes réseaux sociaux existants et leur dernière activité.", "Fixer un rythme réaliste de publication pour les semaines à venir."],
      ["Publier 2 photos/posts sur les réseaux sociaux.", "Mettre en place une relance avis client en fin de service.", "Créer un support simple (carton, QR code) pour inciter aux avis Google.", "Former l'équipe en salle à cette demande d'avis.", "Identifier 3 clients réguliers pouvant être sollicités pour un avis.", "Répondre à tous les nouveaux avis reçus dans les 48h.", "Suivre l'évolution du nombre d'avis sur la semaine."],
      ["Vérifier la cohérence des informations sur les annuaires (TripAdvisor, TheFork...).", "Corriger les horaires ou coordonnées erronés sur chaque annuaire.", "Réclamer la fiche établissement si elle n'est pas encore revendiquée.", "Comparer votre présence en ligne à celle de votre principal concurrent.", "Publier un nouveau post sur les réseaux sociaux.", "Relancer la demande d'avis en fin de service sur toute la semaine.", "Répondre aux avis reçus, positifs comme négatifs."],
      ["Bilan visibilité : évolution des vues et des avis sur le mois.", "Calculer le nombre total de nouveaux avis obtenus sur le mois.", "Comparer la note Google en début et fin de mois.", "Identifier le post ou la photo ayant le mieux fonctionné.", "Lister les annuaires encore à corriger le mois suivant.", "Valider le rythme de publication à conserver.", "Fixer les priorités visibilité du mois suivant avec votre DG."]
    ]
  },
  'Fidélisation de vos clients': {
    objective: "Mettre en place les premiers leviers de fidélisation.",
    kpis: ["[HEBDO] Taux de clients récurrents", "[HEBDO] Nombre de contacts collectés"],
    weeks: [
      ["Définir un moyen simple de collecter les contacts clients (carte, newsletter).", "Former l'équipe en salle au sujet.", "Choisir l'outil de collecte (papier, carnet, appli) le plus simple à démarrer.", "Identifier à quel moment du service proposer la collecte de contact.", "Rédiger une phrase type pour que l'équipe propose la collecte naturellement.", "Vérifier la conformité RGPD minimale de la collecte (mention, consentement).", "Démarrer la collecte sur au moins 3 services dans la semaine."],
      ["Lancer une offre de bienvenue pour les nouveaux clients.", "Identifier vos 10 meilleurs clients récurrents.", "Définir les critères de reconnaissance d'un \"bon client récurrent\".", "Créer un geste simple de remerciement pour ces clients identifiés.", "Compter le nombre de nouveaux contacts collectés sur la semaine.", "Ajuster l'offre de bienvenue selon les premiers retours clients.", "Sensibiliser l'équipe à reconnaître les habitués en salle."],
      ["Tester un message de relance pour les clients inactifs depuis 2 mois.", "Identifier la liste des clients inactifs depuis 2 mois ou plus.", "Rédiger un message de relance court et personnel.", "Envoyer la relance à un premier groupe test.", "Suivre le taux de retour de cette relance.", "Ajuster le message si le taux de réponse est faible.", "Continuer la collecte de contacts sur les nouveaux clients."],
      ["Bilan fidélisation et ajustement de l'offre.", "Calculer le taux de clients récurrents du mois.", "Comparer ce taux à celui du mois précédent.", "Identifier l'action de fidélisation ayant le plus rapporté.", "Décider si l'offre de bienvenue doit évoluer.", "Consolider la liste de contacts collectés dans un fichier unique.", "Fixer les priorités fidélisation du mois suivant avec votre DG."]
    ]
  },
  'Suivi mensuel de vos chiffres': {
    objective: "Mettre en place un tableau de bord mensuel fiable.",
    kpis: ["[HEBDO] Trésorerie disponible", "[HEBDO] CA de la semaine"],
    weeks: [
      ["Rassembler le CA et les charges des 3 derniers mois.", "Définir la structure minimale du tableau de bord.", "Lister les indicateurs vraiment utiles à votre pilotage (CA, marge, trésorerie, food cost).", "Choisir l'outil pour tenir ce tableau (un tableur simple suffit au départ).", "Identifier qui, dans l'équipe, alimentera ce tableau chaque semaine.", "Récupérer les relevés bancaires ou comptables nécessaires.", "Remplir une première version, même incomplète, du tableau de bord."],
      ["Mettre en place le suivi hebdo trésorerie.", "Identifier la source de chaque indicateur.", "Vérifier la fiabilité des chiffres saisis avec un contrôle croisé.", "Ajouter le CA de la semaine au tableau de bord.", "Repérer les premières tendances (hausse, baisse, stabilité).", "Simplifier le tableau si certaines colonnes s'avèrent inutiles.", "Fixer un créneau fixe chaque semaine pour la mise à jour."],
      ["Compléter le tableau de bord avec le mois en cours.", "Calculer la marge nette du mois en cours à date.", "Comparer les chiffres du mois en cours au même mois de l'année précédente si disponible.", "Identifier un poste de charge en dérive s'il y en a un.", "Mettre à jour le suivi trésorerie de la semaine.", "Vérifier que tous les indicateurs sont bien renseignés sans trou.", "Préparer les chiffres à présenter au point mensuel avec le DG."],
      ["Premier point mensuel chiffré complet avec le DG.", "Présenter les indicateurs clés du mois (CA, marge, trésorerie).", "Identifier les 2 chiffres les plus préoccupants du mois.", "Identifier les 2 chiffres les plus positifs du mois.", "Décider des ajustements à apporter au tableau de bord.", "Valider le format définitif du tableau pour les mois suivants.", "Fixer les priorités pilotage du mois suivant avec votre DG."]
    ]
  },
  'Clarté de vos objectifs chiffrés': {
    objective: "Traduire votre vision en objectifs chiffrés clairs.",
    kpis: ["[HEBDO] Avancement des objectifs du mois"],
    weeks: [
      ["Reformuler votre vision 12 mois en 3 chiffres clés.", "Partager ces objectifs avec l'équipe si pertinent.", "Vérifier que chaque chiffre choisi est mesurable simplement.", "Noter la valeur actuelle de chacun de ces 3 chiffres.", "Fixer une échéance claire pour chacun de ces objectifs.", "Identifier qui, dans l'équipe, peut influencer chacun de ces chiffres.", "Afficher ces 3 objectifs dans un endroit visible pour vous (et l'équipe)."],
      ["Découper l'objectif 12 mois en paliers trimestriels.", "Définir la valeur cible de chaque objectif à 3, 6, 9 et 12 mois.", "Vérifier que le palier à 3 mois est réellement atteignable.", "Identifier les actions déjà en cours qui contribuent à ces paliers.", "Repérer les paliers qui manquent encore d'un plan d'action clair.", "Mettre à jour votre tableau de bord avec ces paliers.", "Partager les paliers avec votre DG pour validation."],
      ["Identifier les 2 leviers qui ont le plus d'impact sur ces objectifs.", "Estimer le gain potentiel de chacun de ces 2 leviers.", "Vérifier les ressources (temps, budget, équipe) nécessaires pour chaque levier.", "Choisir lequel des 2 leviers activer en priorité.", "Définir une première action concrète pour ce levier prioritaire.", "Fixer un indicateur de suivi dédié à ce levier.", "Démarrer la mise en œuvre de cette première action."],
      ["Valider le plan d'objectifs avec le DG et ajuster si besoin.", "Mesurer l'avancement réel du levier prioritaire sur le mois.", "Comparer cet avancement à l'objectif du palier à 3 mois.", "Ajuster les paliers si les premiers résultats le justifient.", "Documenter les objectifs chiffrés finaux dans un support simple.", "Partager la version finale avec l'équipe si pertinent.", "Fixer les priorités pilotage des objectifs pour le mois suivant."]
    ]
  }
};

// Seuils métier du diagnostic financier (food cost cible 28-30%, masse
// salariale cible ~30%, EBITDA cible ~10%). Le diagnostic raisonne par
// élimination dans cet ordre : food cost > masse salariale > charges fixes.
const FINANCIAL_TARGETS = { foodCost: 30, payroll: 30, ebitda: 10 };

const FINANCIAL_LEVER_LABEL = {
  food_cost: 'Suivi de vos coûts (food cost, marges par plat)',
  payroll: 'Organisation de l\'équipe (plannings, rôles clairs)'
};

// Calcule un diagnostic financier chiffré (EBITDA estimé, écart aux cibles
// food cost / masse salariale / charges fixes) à partir des données brutes
// collectées dans le formulaire d'audit.
function financialDiagnosis(overview, restaurantMetrics) {
  const revenue = (overview && overview.revenue) || 0;
  const foodCostPct = (restaurantMetrics && restaurantMetrics.food_cost_pct) || 0;
  const payrollPct = (restaurantMetrics && restaurantMetrics.payroll_pct) || 0;
  const fixedCostsPct = revenue > 0 ? Math.round(((overview.fixed_costs || 0) / revenue) * 1000) / 10 : 0;
  const ebitdaPct = Math.round((100 - foodCostPct - payrollPct - fixedCostsPct) * 10) / 10;

  const levers = [
    { key: 'food_cost', label: 'Food cost', actual: foodCostPct, target: FINANCIAL_TARGETS.foodCost, gap: Math.round((foodCostPct - FINANCIAL_TARGETS.foodCost) * 10) / 10, over: foodCostPct > FINANCIAL_TARGETS.foodCost },
    { key: 'payroll', label: 'Masse salariale', actual: payrollPct, target: FINANCIAL_TARGETS.payroll, gap: Math.round((payrollPct - FINANCIAL_TARGETS.payroll) * 10) / 10, over: payrollPct > FINANCIAL_TARGETS.payroll },
    { key: 'fixed_costs', label: 'Charges fixes', actual: fixedCostsPct, target: null, gap: null, over: false }
  ];
  const priorityOrder = { food_cost: 1, payroll: 2, fixed_costs: 3 };
  const overLevers = levers.filter(l => l.over).sort((a, b) => priorityOrder[a.key] - priorityOrder[b.key]);

  return {
    ebitda_pct: ebitdaPct,
    ebitda_target: FINANCIAL_TARGETS.ebitda,
    ebitda_gap: Math.round((FINANCIAL_TARGETS.ebitda - ebitdaPct) * 10) / 10,
    healthy: ebitdaPct >= FINANCIAL_TARGETS.ebitda,
    levers,
    top_lever: overLevers[0] || null
  };
}

// Détermine le pilier le plus prioritaire à travailler en mois 1 : le
// diagnostic financier chiffré (food cost / masse salariale hors cible)
// passe avant l'autoévaluation du client si les deux sont en désaccord.
function pickFocusLabel(audit) {
  const fd = audit && audit.financial_diagnosis;
  if (fd && fd.top_lever && FINANCIAL_LEVER_LABEL[fd.top_lever.key]) {
    return FINANCIAL_LEVER_LABEL[fd.top_lever.key];
  }
  const allCriteria = ((audit && audit.pillars) || []).flatMap(p => p.criteria || []);
  if (!allCriteria.length) return null;
  return allCriteria.slice().sort((a, b) => (a.pct ?? 100) - (b.pct ?? 100))[0].label;
}

// Reconstruit le mois 1 (objectif + kpis + 4 semaines de 7 tâches) à partir
// du pilier prioritaire (diagnostic financier ou, à défaut, critère le plus
// fragile trouvé dans audit.pillars). Utilisé par le bouton "Synchroniser le
// plan" pour rafraîchir un plan déjà généré sans perdre les cases cochées.
function syncMonth1FromPlaybook(audit, existingMonth1) {
  const focusLabel = pickFocusLabel(audit);
  if (!focusLabel) return null;
  const playbook = PLAYBOOKS[focusLabel];
  if (!playbook) return null;

  // Préserve les cases déjà cochées : on cherche une tâche au texte identique
  // dans l'ancien mois 1, où qu'elle soit (peu importe la semaine d'origine).
  const oldTasksByText = {};
  ((existingMonth1 && existingMonth1.weeks) || []).forEach(w => {
    (w.tasks || []).forEach(t => { if (t.done) oldTasksByText[t.text] = true; });
  });

  return {
    name: (existingMonth1 && existingMonth1.name) || 'Mois 1',
    current: existingMonth1 ? !!existingMonth1.current : true,
    objective: playbook.objective,
    kpis: playbook.kpis.slice(),
    weeks: playbook.weeks.map((tasks, i) => {
      const oldWeek = existingMonth1 && existingMonth1.weeks && existingMonth1.weeks[i];
      return {
        label: (oldWeek && oldWeek.label) || `Semaine ${i + 1}`,
        locked: oldWeek ? !!oldWeek.locked : i > 0,
        tasks: tasks.map(t => ({ text: t, done: !!oldTasksByText[t] }))
      };
    })
  };
}
