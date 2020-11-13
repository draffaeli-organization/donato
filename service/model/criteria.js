// criteria.js

class Criteria {
    constructor(criteriaType, searchValue, selectedFields, sortingField, orderMode) {
        this.type = criteriaType
        this.searchValue = searchValue
        this.selectedFields = selectedFields
        this.sortingField = sortingField
        this.orderMode = orderMode
    }
}

class CriteriaBuilder {
    constructor(criteriaType = CriteriaType.ALL, searchValue, selectedFields, sortingFields, orderMode) {
        this.criteriaType = criteriaType
        this.searchValue = searchValue
        this.selectedFields = selectedFields
        this.sortingField = sortingFields
        this.orderMode = orderMode
    }

    withSearchValue(value) {
        this.searchValue = value
        if (value) {
            this.criteriaType = CriteriaType.RESTRICTED
        }
        return this
    }

    withSelectedFields(value) {
        if (value) {
            this.selectedFields = value.split(",")
        }
        return this
    }

    withSortingField(value) {
        this.sortingField = value
        return this
    }

    withOrderMode(value) {
        this.orderMode = value
        return this
    }

    build() {
        return new Criteria(this.criteriaType, this.searchValue, this.selectedFields, this.sortingField, this.orderMode)
    }
}



const Field = {
    NAME: "name",
    DESCRIPTION: "description",
    PUNCTUATION: "punctuation",
    PUNCTUATION_VALUES: "punctuation.values",
    PUNCTUATION_AVERAGE: "punctuation.average"
}

const CriteriaType = {
    ALL: "all",
    RESTRICTED: "restricted"
}

const OrderMode = {
    ASCENDING: "asc",
    DESCENDING: "desc"
}

module.exports = {Criteria, Field, CriteriaType, OrderMode, CriteriaBuilder}
