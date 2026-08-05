export interface Category {
	label: string
	value: string
}
export interface Newsletter {
  placeholder: string
  buttonText: string
  errors: {
    empty: string
    invalid: string
  }
}