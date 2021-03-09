interface String {
    toUpperCaseWithTrim(): string
    equalsIgnoreCase(other: string): boolean
}

String.prototype.toUpperCaseWithTrim = function() {
    return this.trim().toUpperCase()
}

String.prototype.equalsIgnoreCase = function(other: string) {
    return this.localeCompare(other, undefined, { sensitivity: 'accent' }) === 0
}
