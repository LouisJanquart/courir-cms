import type { Schema, Struct } from '@strapi/strapi';

export interface TrainingStep extends Struct.ComponentSchema {
  collectionName: 'components_training_steps';
  info: {
    displayName: 'Step';
  };
  attributes: {
    kind: Schema.Attribute.Enumeration<
      ['warmup', 'run', 'walk', 'rest', 'cooldown']
    >;
    label: Schema.Attribute.String;
    pace: Schema.Attribute.String;
    seconds: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'training.step': TrainingStep;
    }
  }
}
