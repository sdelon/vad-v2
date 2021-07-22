const accueilQuery = `{
    accueil{
    titre
    intro
    bouton_text
    bouton_url
    body{
    ...on concept_clef{
    non-repeat{
    titre_section
    intro_section
    image_section
    }
    repeat{
    titre_du_concept
    intro_du_concept
    }
    }
    ...on bandeau_de_soutien{
    non-repeat{
    titre_du_bandeau
    intro_du_bandeau
    bouton_texte
    bouton_lien
    image
    }
    }
    ...on list_of_articles{
    non-repeat{
    titre_section
    intro_section
    }
    repeat{
    articles_to_link{
    ...on page_evenement{
    titre
    extrait
    categorie
    date_debut
    date_fin
    image_principale
    page
    }
    }
    }
    }
    }
    }
    }`

const projetQuery = `{
    page_projet{
    titre_principal
    intro_principale
    image_1
    image_2
    body{
    ...onle_projet_en_3_idees{
    repeat{
    titre_du_concept
    description_concept
    }
    }
    ...onliste_des_partenaires{
    non-repeat{
    titre_section
    intro
    bouton_texte
    bouton_lien
    }
    repeat{
    logo
    }
    }
    }
    }
    }`

const fondatricesQuery = `{
    page_fondatrices{
    titre_principal
    intro
    description_1
    description_2
    image
    body{
    ...onbandeau_de_soutien{
    non-repeat{
    titre_du_bandeau
    intro_du_bandeau
    bouton_texte
    bouton_lien
    image
    }
    }
    }
    }
    }`

const ateliersQuery = `{
    pages_evenements{
    titre_principal
    intro_principale
    body{
    ...onlist_of_articles{
    non-repeat{
    titre_section
    }
    repeat{
    articles_to_link{
    ...onpage_evenement{
    titre
    extrait
    categorie
    date_debut
    date_fin
    image_principale
    page
    }
    }
    }
    }
    ...onorganisation_de_visites{
    non-repeat{
    ...non-repeatFields
    }
    repeat{
    ...repeatFields
    }
    }
    }
    }
    }`

const agendaQuery = `{
    pages_evenements{
    titre_principal
    intro_principale
    body{
    ...on list_of_articles{
    non-repeat{
    titre_section
    }
    repeat{
    articles_to_link{
    ...on page_evenement{
    titre
    extrait
    categorie
    date_debut
    date_fin
    image_principale
    page
    }
    }
    }
    }
    ...on evenements_prives{
    non-repeat{
    ...non-repeatFields
    }
    }
    }
    }
    }`

const eventsQuery = `{
    page_evenement{
    titre
    extrait
    image_principale
    categorie
    date_debut
    date_fin
    }
    }`

export { accueilQuery, projetQuery, fondatricesQuery, ateliersQuery, agendaQuery, eventsQuery }

