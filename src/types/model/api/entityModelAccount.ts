/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { Links } from './links';
import type { EntityModelAccountCurrency } from './entityModelAccountCurrency';

export interface EntityModelAccount {
  _links?: Links;
  currency: EntityModelAccountCurrency;
  name: string;
}
