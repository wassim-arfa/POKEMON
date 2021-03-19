const formatType = (pockemonType: string): string => {
    switch (pockemonType) {
        case 'Feu':
            return 'red';
        case 'Eau':
            return 'blue';
        case 'Plante':
            return 'green';
        case 'Poison':
            return 'purple';
        case 'Normal':
            return '#bdbdbd grey lighten-1';
        case 'Vol':
            return '#c5cae9 indigo lighten-4';
        case 'Fée':
            return '#f48fb1 pink lighten-3';
        case 'Electrik':
            return '#ffd600 yellow accent-4';
        case 'Insecte':
            return '#8bc34a light-green';
        default:
            return 'defaultColor';
    }
}

export default formatType ;