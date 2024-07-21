'use client'

import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'

import Link from 'next/link'

import { updateInvoice, State  } from '@/app/lib/actions'
import { useActionState } from 'react';
import type { CustomerField, InvoiceForm } from '@/app/lib/definitions'
import { Button } from '@/app/ui/button'

/* eslint-disable react/jsx-no-bind */

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
   invoice: InvoiceForm
   customers: CustomerField[]
}) {
  const initialState: State = { message: null, errors: {} };
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  const [state, formAction] = useActionState(updateInvoiceWithId, initialState);

  return 
    <form action={formAction}></form>;
      //<input type="hidden" name="id" value={invoice.id} />
   
  
}