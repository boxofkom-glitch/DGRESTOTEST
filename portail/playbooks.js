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
  'Manuel opératoire & fiches process': {
    objective: "Poser les bases d'un manuel opératoire simple pour rendre l'établissement moins dépendant de vous et prêt à être dupliqué.",
    kpis: ["[HEBDO] Fiches procédure rédigées", "[HEBDO] Fiches recettes standardisées"],
    weeks: [
      ["Lister toutes les tâches d'ouverture, dans l'ordre où elles se déroulent aujourd'hui.", "Lister toutes les tâches de fermeture, dans l'ordre.", "Choisir un format simple de fiche procédure (qui / quoi / comment / fréquence / point de contrôle).", "Rédiger la fiche procédure d'ouverture avec ce format.", "Rédiger la fiche procédure de fermeture avec ce format.", "Rédiger la fiche recette standardisée de votre plat signature (grammages, dressage, temps de préparation).", "Choisir où stocker ces fiches pour qu'elles soient accessibles à toute l'équipe."],
      ["Rédiger les fiches recettes des 3 autres plats les plus vendus.", "Identifier les 3 postes les plus critiques à documenter en priorité.", "Rédiger une fiche procédure pour le poste le plus critique identifié.", "Définir les standards de présentation et de dressage pour vos plats phares.", "Vérifier que les fiches déjà rédigées sont compréhensibles par quelqu'un qui ne connaît pas le poste.", "Ajouter les points de contrôle qualité sur chaque fiche recette (aspect, température, temps).", "Partager les premières fiches avec l'équipe pour un premier retour."],
      ["Faire tester une fiche procédure par un collaborateur qui ne fait pas habituellement cette tâche.", "Ajuster la fiche selon les difficultés rencontrées lors du test.", "Rédiger 2 fiches procédures supplémentaires sur des tâches répétitives (réception marchandise, mise en place).", "Identifier les erreurs fréquentes à noter sur chaque fiche pour anticiper les problèmes.", "Définir qui, dans l'équipe, sera responsable de maintenir ces fiches à jour.", "Vérifier la cohérence des fiches recettes avec le suivi food cost déjà en place.", "Compléter le classeur ou dossier avec toutes les fiches validées cette semaine."],
      ["Faire un bilan : combien de fiches procédures et fiches recettes sont finalisées ce mois-ci.", "Identifier les 3 prochaines fiches prioritaires pour le mois suivant.", "Présenter le manuel opératoire, même incomplet, à toute l'équipe.", "Valider le format définitif des fiches avec votre DG.", "Vérifier que les fiches essentielles (ouverture, fermeture, plats phares) sont bien accessibles à tous.", "Vérifier que les fiches recettes couvrent au moins les plats représentant 70% de votre volume de vente.", "Fixer les priorités manuel opératoire du mois suivant avec votre DG."]
    ]
  },
  'Développement de votre présence sur les réseaux sociaux': {
    objective: "Créer ou relancer votre présence sur les réseaux sociaux et démarrer une régularité de publication, y compris en vidéo.",
    kpis: ["[HEBDO] Publications réalisées", "[HEBDO] Vues cumulées"],
    weeks: [
      ["Créer ou vérifier vos comptes Instagram et/ou TikTok professionnels.", "Renseigner une bio claire avec votre adresse, vos horaires et un lien vers votre fiche Google.", "Choisir une photo de profil nette et reconnaissable (logo ou devanture).", "Lister 10 idées de contenus simples (coulisses cuisine, dressage d'un plat, portrait d'un membre de l'équipe).", "Filmer et poster une première vidéo courte (moins de 30 secondes) avec votre téléphone.", "Identifier 3 comptes locaux ou concurrents pour observer ce qui fonctionne chez eux.", "Fixer un rythme réaliste de publication pour les semaines à venir."],
      ["Publier 2 nouveaux contenus (photo ou vidéo) dans la semaine.", "Répondre à tous les commentaires et messages reçus.", "Tester un format \"coulisses\" (préparation d'un plat en accéléré).", "Identifier le meilleur moment de la journée pour publier selon votre activité.", "Ajouter une story ou un post mettant en avant un membre de l'équipe.", "Vérifier que vos informations (horaires, menu, liens) sont identiques sur tous vos comptes.", "Noter le nombre de vues de chaque publication de la semaine."],
      ["Publier 2 nouveaux contenus dans la semaine, dont au moins une vidéo.", "Tester un format différent de la semaine précédente (avant/après, recette minute, avis client filmé).", "Identifier le contenu ayant obtenu le plus de vues jusqu'ici.", "Reproduire ce qui a le mieux fonctionné avec une variante.", "Solliciter un client satisfait pour un témoignage filmé, avec son accord.", "Mettre à jour votre fiche Google avec 1 à 2 nouvelles photos issues des contenus publiés.", "Continuer à répondre aux commentaires et messages sous 24h."],
      ["Faire le bilan du mois : nombre de publications, vues cumulées, nouveaux abonnés.", "Identifier les 2 formats de contenu à poursuivre le mois suivant.", "Identifier les formats à abandonner car peu performants.", "Préparer un calendrier de publication pour le mois suivant.", "Vérifier que vos comptes réseaux sociaux et votre fiche Google renvoient bien les uns vers les autres.", "Solliciter un deuxième témoignage client filmé.", "Fixer les priorités réseaux sociaux du mois suivant avec votre DG."]
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

// Domaines transverses toujours proposés en complément du pilier le plus
// urgent : duplicabilité (manuel opératoire) et acquisition (réseaux sociaux).
// Objectif : qu'un mois ne soit jamais 100% focalisé sur un seul sujet (ex.
// food cost) — le client doit sentir des victoires rapides sur plusieurs
// fronts dès la semaine 1, comme demandé explicitement par le produit.
const CROSS_CUTTING_LABELS = ['Manuel opératoire & fiches process', 'Développement de votre présence sur les réseaux sociaux'];
const WEEK_TASK_SPLIT = [3, 2, 2]; // sur 7 tâches/semaine : 3 sur le pilier prioritaire, 2+2 sur les 2 domaines transverses

// Sélectionne jusqu'à 3 domaines (labels PLAYBOOKS) à mélanger sur un mois :
// 1) le pilier le plus urgent (diagnostic financier ou critère le plus fragile),
// 2) puis les domaines transverses (manuel opératoire, réseaux sociaux),
// 3) puis les autres critères notés, du plus fragile au plus solide,
// en dédupliquant. Garantit la diversité même si le pilier prioritaire est
// déjà l'un des domaines transverses (ex. 'Visibilité en ligne').
function pickFocusLabels(audit) {
  const primary = pickFocusLabel(audit);
  const allCriteria = ((audit && audit.pillars) || []).flatMap(p => p.criteria || []);
  const restSorted = allCriteria.slice().sort((a, b) => (a.pct ?? 100) - (b.pct ?? 100)).map(c => c.label);
  const candidates = [primary, ...CROSS_CUTTING_LABELS, ...restSorted].filter(l => l && PLAYBOOKS[l]);
  const picked = [];
  candidates.forEach(l => { if (!picked.includes(l) && picked.length < 3) picked.push(l); });
  return picked;
}

// Construit un mois en mélangeant les tâches de plusieurs playbooks semaine
// par semaine (au lieu d'un seul playbook filé sur les 4 semaines), pour que
// chaque semaine combine plusieurs sujets et donne une impression de
// quick-wins diversifiés plutôt qu'un mois entier sur un seul thème.
function buildDiversifiedMonth(labels, existingMonth, monthName) {
  const playbooks = labels.map(l => PLAYBOOKS[l]).filter(Boolean);
  if (!playbooks.length) return null;

  const split = WEEK_TASK_SPLIT.slice(0, playbooks.length);
  const total = split.reduce((a, b) => a + b, 0);
  if (total < 7) split[0] += 7 - total;

  const oldTasksByText = {};
  ((existingMonth && existingMonth.weeks) || []).forEach(w => {
    (w.tasks || []).forEach(t => { if (t.done) oldTasksByText[t.text] = true; });
  });

  const kpis = [];
  playbooks.forEach(pb => pb.kpis.forEach(k => { if (kpis.length < 4 && !kpis.includes(k)) kpis.push(k); }));

  const domainNames = labels.map(l => l.split('(')[0].trim());
  const objective = playbooks.length > 1
    ? `Avancer en parallèle sur plusieurs fronts pour cumuler des victoires rapides dès les premières semaines : ${domainNames.join(', ')}.`
    : playbooks[0].objective;

  const weeks = [0, 1, 2, 3].map(i => {
    const oldWeek = existingMonth && existingMonth.weeks && existingMonth.weeks[i];
    let tasks = [];
    playbooks.forEach((pb, di) => { tasks = tasks.concat((pb.weeks[i] || []).slice(0, split[di] || 0)); });
    return {
      label: (oldWeek && oldWeek.label) || `Semaine ${i + 1}`,
      locked: oldWeek ? !!oldWeek.locked : i > 0,
      tasks: tasks.map(t => ({ text: t, done: !!oldTasksByText[t] }))
    };
  });

  return {
    name: (existingMonth && existingMonth.name) || monthName || 'Mois 1',
    current: existingMonth ? !!existingMonth.current : true,
    objective, kpis, weeks
  };
}

// Reconstruit le mois 1 en mélangeant le pilier prioritaire avec les domaines
// transverses (manuel opératoire, réseaux sociaux). Utilisé par le bouton
// "Synchroniser le plan" pour rafraîchir un plan déjà généré sans perdre les
// cases cochées, ET par le générateur d'audit pour le mois 1 initial.
function syncMonth1FromPlaybook(audit, existingMonth1) {
  const labels = pickFocusLabels(audit);
  if (!labels.length) return null;
  return buildDiversifiedMonth(labels, existingMonth1, (existingMonth1 && existingMonth1.name) || 'Mois 1');
}

function pbFmt(n) { return Math.round(n).toLocaleString('fr-FR'); }
function pbClamp(n, min, max) { return Math.max(min, Math.min(max, n)); }

// Construit les 12 mois de vision : deux trames possibles selon que les
// fondamentaux financiers sont déjà sains ou non.
// - Normal (par défaut) : réparer les fondamentaux (food cost/masse
//   salariale = plafonds à faire baisser, EBITDA = plancher à dépasser) +
//   poser la duplicabilité.
// - Scale (fd.healthy && pas de levier financier au-dessus du seuil) : les
//   fondamentaux sont déjà bons, l'objectif 12 mois bascule vers le
//   développement (franchise/succursale, 2e point de vente, salons pros,
//   protection de la marque) — cf. demande explicite du produit : "si le food
//   cost et la masse salariale sont bonnes au bout d'un mois, on développe".
function buildVision12(ctx) {
  const { revenue, growth, foodcost, payroll, recurring, involvNow, involvTarget, hardestrole, fd } = ctx;
  const targetRevenue = revenue * (1 + growth / 100);
  const targetFoodCost = pbClamp(foodcost - 3, 20, 100);
  const targetPayroll = pbClamp(payroll - 2, 15, 100);
  const targetRecurring = pbClamp(recurring + 15, 0, 100);
  const foodCostSavings = revenue * 0.03;
  const readyToScale = fd.healthy && !fd.top_lever;

  if (readyToScale) {
    return [
      `Vos fondamentaux sont sains (EBITDA ${fd.ebitda_pct}% ≥ ${fd.ebitda_target}%, food cost et masse salariale sous les seuils métier) : l'objectif des 12 prochains mois n'est plus de réparer, c'est de dupliquer.`,
      `Finaliser votre "pack de duplication" : manuel opératoire complet, fiches recettes standardisées, identité de marque et grille tarifaire prêts à être transmis.`,
      `Choisir et sécuriser votre mode de développement (franchise, succursale, licence de marque) selon vos moyens et votre appétit pour le pilotage à distance.`,
      `Repérer et qualifier un 2e emplacement (zone de chalandise, clientèle comparable, loyer soutenable) pour une ouverture dans les 12 mois.`,
      `Participer à au moins un salon professionnel de la restauration pour vous faire connaître : recrutement de franchisés, repérage d'emplacements, veille concurrentielle.`,
      `Protéger votre marque (dépôt INPI, nom de domaine, charte graphique) avant toute duplication.`,
      `Continuer à dépasser ${fd.ebitda_target}% d'EBITDA sur l'établissement actuel — un modèle qu'on duplique doit rester rentable en se dupliquant, pas seulement en solo.`,
      `Réduire votre implication opérationnelle de ${involvNow}% à ${involvTarget}% pour libérer le temps nécessaire au pilotage du développement.`,
      `Stabiliser votre équipe actuelle pour qu'elle tienne seule pendant que vous pilotez l'ouverture suivante, en particulier sur le poste de ${hardestrole || 'vos postes clés'}.`,
    ];
  }
  return [
    `Dépasser durablement ${fd.ebitda_target}% d'EBITDA (actuellement ${fd.ebitda_pct}%) — la vraie cible n'est pas ce chiffre mais le maximum atteignable au-delà.`,
    `Faire baisser votre food cost le plus possible sous ${targetFoodCost}% (actuellement ${foodcost}%, plafond métier 28-30%), soit environ ${pbFmt(foodCostSavings)}€ de marge récupérée sur l'année si vous tenez ce niveau.`,
    `Faire baisser votre masse salariale le plus possible sous ${targetPayroll}% du CA (actuellement ${payroll}%, plafond métier ~30%) sans dégrader la qualité de service.`,
    `Rendre votre activité duplicable : manuel opératoire à jour, rôles clarifiés, process documentés — la base indispensable avant tout second point de vente.`,
    `Atteindre ${pbFmt(targetRevenue)}€ de chiffre d'affaires annuel (+${growth}%) en sécurisant un flux de clients récurrents.`,
    `Réduire votre implication opérationnelle de ${involvNow}% à ${involvTarget}% grâce à une équipe autonome et des process clairs.`,
    `Faire passer votre taux de clients récurrents de ${recurring}% à ${targetRecurring}% grâce à un programme de fidélisation actif.`,
    `Stabiliser votre équipe pour réduire le turnover, en particulier sur le poste de ${hardestrole || 'vos postes clés'}.`,
  ];
}

// Construit les objectifs à 4 mois : même logique de bascule normal/scale.
function buildPriorities4(ctx) {
  const { foodcost, involvNow, involvTarget, greviews, grating, hardestrole, fd, weakLabel } = ctx;
  const targetRating = Math.min(grating + 0.3, 5).toFixed(1);
  const readyToScale = fd.healthy && !fd.top_lever;

  if (readyToScale) {
    return [
      `Réaliser un audit chiffré complet du modèle actuel (food cost, masse salariale, marge, trésorerie) sur les 3 derniers mois pour vérifier qu'il est stable, pas juste bon un mois.`,
      `Finaliser le manuel opératoire (ouverture, fermeture, fiches recettes, standards de service) — le prérequis n°1 avant toute duplication.`,
      `Identifier 2 à 3 secteurs géographiques candidats pour un second point de vente ou un premier franchisé.`,
      `Étudier le mode de développement le plus adapté (franchise / succursale / licence) et ses implications juridiques et financières.`,
      `Repérer un salon professionnel de la restauration à venir et préparer votre présence (support de présentation, chiffres clés du concept).`,
      `Sécuriser le financement de l'expansion (apport personnel, prêt, éventuel droit d'entrée franchisé).`,
      `Continuer le pilotage mensuel chiffré avec votre DG pour garder le modèle actuel rentable pendant la préparation du développement.`,
    ];
  }
  return [
    `Mettre en place un suivi hebdomadaire du food cost et viser une première baisse de ${foodcost}% à ${pbClamp(foodcost - 1, 20, 100)}%.`,
    `Lancer un premier palier de délégation : passer de ${involvNow}% à ${Math.max(involvTarget, involvNow - 15)}% d'implication opérationnelle.`,
    `Passer de ${greviews} à ${greviews + 20} avis Google et viser une note de ${targetRating}/5, en structurant la demande d'avis en fin de service.`,
    `Clarifier vos indicateurs financiers clés (trésorerie, marge).`,
    `Sécuriser le poste de ${hardestrole || 'vos postes clés'} pour limiter le risque de départ dans les 4 prochains mois.`,
    `Réaliser un premier point mensuel chiffré avec votre DG pour ajuster le plan.`,
    fd && fd.top_lever ? `Prioriser la rentabilité par : ${fd.top_lever.label} — c'est le levier qui pèse le plus sur votre EBITDA aujourd'hui.` : `Prioriser l'amélioration de : ${weakLabel} (identifié comme le point le plus fragile).`,
  ];
}
