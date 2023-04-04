import ahold from '../../public/Ahold.json'
import { id } from '../util'
export interface Retailer {
  website?: string
  data?: RetailerDetail[]
}

export interface RetailerDetail {
  fscl_wk_mn_val: string
  IRI_TSA_CATEGORY: string
  IRI_TSA_PARENT: string
  POS_DT: string
  IRI_TSA_MANUF: string
  IRI_TSA_BRAND: string
  STATE: string
  STORE_OOS_IND: number
  STORE_ON_HAND_UNITS: number | null
  // STORE_TYPE: null
  STORE_SALES_UNITS: number | null
  STOR_ID: string
  STORE_SALES_AMOUNT: number | null
  CITY: string
  IRI_TSA_TYPE: string
  // STORE_ON_ORDER_UNITS: null
  ZIP: string
  fscl_wk_nm: string
  dow_nm: string
  STORE_RECEIPT_UNITS: number | null
  RSI_PRODUCT_ID_13: string
  RETAILER_NAME: string
  fscl_prd_mn_val: string
  COUNTRY_CODE: string
  RSI_PRODUCT_KEY: string
}

export type RetailerWithId = Retailer & { id: string }

export type Retailers = Record<string, Retailer>

export const retailers: Retailers = {
  Walmart: {
    website: 'https://www.walmart.com'
  },
  Target: {
    website: 'https://www.target.com'
  },
  Walgreens: {
    website: 'https://www.walgreens.com'
  },
  Ahold: {
    website: '',
    data: ahold.sort(() => 0.5 - Math.random()).slice(0, 100)
  },
  "BJ's": {
    website: ''
  },
  Costco: {
    website: ''
  },
  Meijer: {
    website: ''
  },
  "Sam's Club": {
    website: 'http://www.samsclub.com'
  },
  'Harris Teeter': {
    website: ''
  }
}

export interface SkuPerformance {
  iri_tsa_cat: string
  retail: number
  capacityPercentage: string
  volTrend: number
  revenue: number
  sharedTrend: number
}
export interface RetailerSummary {
  value: string
  aop?: string
  hover?: string
}

export interface RetailerStat {
  summary: Record<string, RetailerSummary>
  skuPerf: SkuPerformance[]
}

function analyzeData(data: RetailerDetail[]): SkuPerformance[] {
  const skuPerf: Record<string, { stores: Set<string>; retail: number }> = {}
  const distinctStores = new Set(data.map(x => x.STOR_ID)).size
  data.forEach(x => {
    const sku = x.IRI_TSA_CATEGORY
    if (!skuPerf[sku]) {
      skuPerf[sku] = {
        stores: new Set(),
        retail: 0
      }
    }
    const s = skuPerf[sku]
    s.retail += x.STORE_SALES_AMOUNT ?? 0
    s.stores.add(x.STOR_ID)
  })

  return Object.entries(skuPerf).map(([sku, { stores, retail }]) => {
    return {
      iri_tsa_cat: sku,
      retail,
      capacityPercentage: `${stores.size}/${distinctStores}`,
      volTrend: 0,
      revenue: 0,
      sharedTrend: 0
    }
  })
}

export function buildStat(data: RetailerDetail[]): RetailerStat {
  return {
    summary: {
      'Total Sales': {
        value: '0123123102309'
      },
      'TBG Share': {
        value: 'MSC SPJ'
      },
      YTD: {
        value: '341,954'
      },
      'Last Period': {
        value: '103.2'
      },
      'Gallon Volume': {
        value: '254,453,412'
      },
      'Last Period 2': {
        value: '13,442'
      },
      Foobar: {
        value: 'A+'
      },
      'Service Level': {
        value: '99.9%'
      }
    },
    skuPerf: analyzeData(data)
  }
}
