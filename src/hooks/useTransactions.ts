import { useContext } from 'react'
import {
  TransactionsContext,
  TransactionsContextType,
} from '../contexts/TransactionsContext'

export function useTransaction(): TransactionsContextType {
  const context = useContext(TransactionsContext)

  return context
}
