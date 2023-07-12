function formatNumber(value, type, decimalDig) {
    if (type === 'fiat') {
        // Convert to integer and format it with comma as thousands separator
        return parseInt(value).toLocaleString('en');
    } else if (type === 'currency') {
        // Round to two decimal places
        return Number.parseFloat(value).toFixed(decimalDig);
    } else {
        return value;
    }
}
console.log(formatNumber(1234567.89, 'fiat'));     // Outputs: "1,234,567"
console.log(formatNumber(1234567.89, 'currency')); // Outputs: "1234567.89"
