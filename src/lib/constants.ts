type Repository = {
    owner: string;
    repo: string;
};

export const MOD_MANAGER_REPO: Repository = {
    owner: 'tsunamods-codes',
    repo: '7th-Heaven'
} as const;

export const CATALOG_REPO: Repository = {
    owner: 'tsunamods-codes',
    repo: '7th-Heaven-Catalogs'
} as const;

export const CATALOG_ID_TO_SHOW = [
    'c0d1e191-a251-465d-8a3c-a3be5366d849', // 60/30 FPS Gameplay
    'c33191b1-439d-4536-9c70-cc5f6957dfa2', // Avalanche Arisen Battle scenes
    '09E81530-3F09-46B9-831B-DF431B8F319C', // Echo-S
    '2e4c6623-97b9-4d5c-b2f3-b4f24f06a911', // Cosmo Memory
];