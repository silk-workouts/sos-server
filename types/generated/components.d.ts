import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    Text: Attribute.String;
    Link: Attribute.String;
  };
}

export interface CareerAccomplishmentsAccomplishments extends Schema.Component {
  collectionName: 'components_career_accomplishments_accomplishments';
  info: {
    displayName: 'Accomplishments';
  };
  attributes: {
    Image: Attribute.Media;
    Title: Attribute.String;
    Year: Attribute.String;
  };
}

export interface CarouselCarousel extends Schema.Component {
  collectionName: 'components_carousel_carousels';
  info: {
    displayName: 'Carousel';
  };
  attributes: {
    Images: Attribute.Media;
  };
}

export interface CarouselDescription extends Schema.Component {
  collectionName: 'components_carousel_descriptions';
  info: {
    displayName: 'Description';
    description: '';
  };
  attributes: {
    Description: Attribute.Blocks;
    Carousel: Attribute.Media;
  };
}

export interface ContentboxesContentBoxes extends Schema.Component {
  collectionName: 'components_contentboxes_content_boxes';
  info: {
    displayName: 'Content Boxes';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.String;
  };
}

export interface GodfatherGodfather extends Schema.Component {
  collectionName: 'components_godfather_godfathers';
  info: {
    displayName: 'Godfather';
    description: '';
  };
  attributes: {
    Header: Attribute.String;
    LeftColumnContent: Attribute.Blocks;
    RightColumnContent: Attribute.Blocks;
    BackgroundImage: Attribute.Media;
    Button: Attribute.Component<'button.button'>;
    bgImgMobile: Attribute.Media;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    Header: Attribute.String;
    Subheader: Attribute.String;
    Media: Attribute.Media;
    Button: Attribute.Component<'button.button'>;
    Mobile: Attribute.Media;
  };
}

export interface PageItemsPageItems extends Schema.Component {
  collectionName: 'components_page_items_page_items';
  info: {
    displayName: 'Page Items';
    description: '';
  };
  attributes: {
    Header: Attribute.String;
    AbsHeader: Attribute.String;
    AbsAnswer: Attribute.Text;
    CardioHeader: Attribute.String;
    CardioAnswer: Attribute.Text;
    LegsHeader: Attribute.String;
    LegsAnswer: Attribute.Text;
    StressHeader: Attribute.String;
    StressAnswer: Attribute.Text;
    Subheader: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface ParallaxParallaxSection extends Schema.Component {
  collectionName: 'components_parallax_parallax_sections';
  info: {
    displayName: 'Parallax Section';
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    BackgroundImage: Attribute.Media;
  };
}

export interface PricingPricing extends Schema.Component {
  collectionName: 'components_pricing_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    Header: Attribute.String;
    PricingListHeader: Attribute.String;
    Benefits: Attribute.Component<'pricing.subscribing-benefits', true>;
    Workouts: Attribute.Component<'pricing.workouts', true>;
    Price: Attribute.String;
    Duration: Attribute.String;
    Button: Attribute.Component<'button.button'>;
  };
}

export interface PricingSubscribingBenefits extends Schema.Component {
  collectionName: 'components_pricing_subscribing_benefits';
  info: {
    displayName: 'Subscribing Benefits';
  };
  attributes: {
    Benefit: Attribute.String;
  };
}

export interface PricingWorkouts extends Schema.Component {
  collectionName: 'components_pricing_workouts';
  info: {
    displayName: 'Workouts';
  };
  attributes: {
    Workout: Attribute.String;
  };
}

export interface ProductsProducts extends Schema.Component {
  collectionName: 'components_products_products';
  info: {
    displayName: 'Products';
  };
  attributes: {
    Header: Attribute.String;
    Content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    ProductImage: Attribute.Media;
  };
}

export interface RotatorRotator extends Schema.Component {
  collectionName: 'components_rotator_rotators';
  info: {
    displayName: 'Rotator';
    description: '';
  };
  attributes: {
    Header: Attribute.String;
    Titles: Attribute.Component<'rotator.titles', true>;
    Button: Attribute.Component<'button.button'>;
  };
}

export interface RotatorTitles extends Schema.Component {
  collectionName: 'components_rotator_titles';
  info: {
    displayName: 'Titles';
  };
  attributes: {
    Title: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SocialIconsSocialIcons extends Schema.Component {
  collectionName: 'components_social_icons_social_icons';
  info: {
    displayName: 'Social Icons';
    description: '';
  };
  attributes: {
    URL: Attribute.String;
  };
}

export interface TwoColumnsTwoColumns extends Schema.Component {
  collectionName: 'components_two_columns_two_columns';
  info: {
    displayName: 'TwoColumns';
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    Content: Attribute.Blocks;
    ContnetHighlight: Attribute.Blocks;
  };
}

export interface UpsideLeftColumn extends Schema.Component {
  collectionName: 'components_upside_left_columns';
  info: {
    displayName: 'LeftColumn';
  };
  attributes: {
    Header: Attribute.String;
    LeftColumnContent: Attribute.Blocks;
    RightColumnContent: Attribute.Blocks;
  };
}

export interface UpsideRightColumn extends Schema.Component {
  collectionName: 'components_upside_right_columns';
  info: {
    displayName: 'Right Column';
  };
  attributes: {
    Header: Attribute.String;
    RightColumnContent: Attribute.Blocks;
  };
}

export interface UpsideUpsideSection extends Schema.Component {
  collectionName: 'components_upside_upside_sections';
  info: {
    displayName: 'Upside Section';
  };
  attributes: {
    LeftColumn: Attribute.Component<'upside.left-column'>;
    RightColumnContent: Attribute.Component<'upside.right-column'>;
  };
}

export interface WorkoutProgramsWorkoutPrograms extends Schema.Component {
  collectionName: 'components_workout_programs_workout_programs';
  info: {
    displayName: 'Workout Programs';
    description: '';
  };
  attributes: {
    WorkoutTitle: Attribute.String;
    FolderId: Attribute.BigInteger;
    ShowcaseId: Attribute.BigInteger;
    ContinuousId: Attribute.BigInteger;
  };
}

export interface WorkoutTypesWorkoutTypes extends Schema.Component {
  collectionName: 'components_workout_types_workout_types';
  info: {
    displayName: 'Workout Types';
  };
  attributes: {
    Image: Attribute.Media;
    Title: Attribute.String;
    Description: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'button.button': ButtonButton;
      'career-accomplishments.accomplishments': CareerAccomplishmentsAccomplishments;
      'carousel.carousel': CarouselCarousel;
      'carousel.description': CarouselDescription;
      'contentboxes.content-boxes': ContentboxesContentBoxes;
      'godfather.godfather': GodfatherGodfather;
      'hero.hero': HeroHero;
      'page-items.page-items': PageItemsPageItems;
      'parallax.parallax-section': ParallaxParallaxSection;
      'pricing.pricing': PricingPricing;
      'pricing.subscribing-benefits': PricingSubscribingBenefits;
      'pricing.workouts': PricingWorkouts;
      'products.products': ProductsProducts;
      'rotator.rotator': RotatorRotator;
      'rotator.titles': RotatorTitles;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'social-icons.social-icons': SocialIconsSocialIcons;
      'two-columns.two-columns': TwoColumnsTwoColumns;
      'upside.left-column': UpsideLeftColumn;
      'upside.right-column': UpsideRightColumn;
      'upside.upside-section': UpsideUpsideSection;
      'workout-programs.workout-programs': WorkoutProgramsWorkoutPrograms;
      'workout-types.workout-types': WorkoutTypesWorkoutTypes;
    }
  }
}
