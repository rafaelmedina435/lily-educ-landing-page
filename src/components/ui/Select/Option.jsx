import classNames from 'classnames'
import { HiCheck } from 'react-icons/hi'

const Option = (props) => {
    const {
        innerProps,
        label,
        children,
        isSelected,
        isDisabled,
        data,
        customLabel,
    } = props

    return (
        <div
            className={classNames(
                'select-option',
                !isDisabled &&
                    !isSelected &&
                    'hover:text-gray-800 dark:hover:text-gray-100',
                isSelected && 'text-primary bg-primary-subtle',
                isDisabled && 'opacity-50 cursor-not-allowed',
            )}
            {...innerProps}
        >
            {customLabel ? (
                customLabel(data, label)
            ) : (
                // `children` ya trae el `formatOptionLabel` del Select; sin él,
                // react-select pone la etiqueta y se ve igual que antes.
                <span className="ml-2 min-w-0 flex-1">{children}</span>
            )}
            {isSelected && <HiCheck className="text-xl" />}
        </div>
    )
}

export default Option
