import {
  reactExtension,
  Grid,
  View,
  BlockSpacer,
  Text,
  Image,
  TextBlock,
  InlineLayout,
  Divider,
  Icon,
  useSettings,
  Heading
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const {ratings_count, product_image_1, product_image_2, content_1, content_2, author_1, author_2, why_choose, shipping_icon, truck_icon, shipping_heading, shipping_description, delivery_heading, delivery_description} = useSettings(); 
  return (
    <>
    <BlockSpacer spacing="loose" />
    <Image source={ratings_count}  fit={'cover'} /> 
    <BlockSpacer spacing="loose" />
    <Grid
      columns={['13%', 'fill']}
      spacing="loose"
      blockAlignment={'start'}
      inlineAlignment={'start'}
    >
      <View border="none" padding="none">
        <Image source={product_image_1} /> 
      </View>
      <View border="none" padding="none">
        <InlineLayout columns={['fill', 'fill', '40%']} blockAlignment={'center'}>
          <View border="none" padding="none">
            <Image source="https://cdn.shopify.com/s/files/1/0438/6154/1018/files/ratingStar.png?v=1697170132" /> 
          </View>
          <View border="none" padding="none">
            <Text emphasis='bold' size='small'>{author_1}</Text>
          </View>
          <View border="none" padding="none" inlineAlignment={'end'}>
            <Text appearance="success" size='small' emphasis='bold'>Verified Buyer</Text>
          </View>
        </InlineLayout>
        <TextBlock size='extraSmall' inlineAlignment='start'>
          {content_1}
        </TextBlock>
      </View>
    </Grid>
    <BlockSpacer spacing="loose" />
    <Grid
      columns={['13%', 'fill']}
      spacing="loose"
      blockAlignment={'start'}
      inlineAlignment={'start'}
    >
      <View border="none" padding="none">
        <Image source={product_image_2} />
      </View>
      <View border="none" padding="none">
        <InlineLayout columns={['fill', 'fill', '40%']} blockAlignment={'center'}>
          <View border="none" padding="none">
            <Image source="https://cdn.shopify.com/s/files/1/0438/6154/1018/files/ratingStar.png?v=1697170132" /> 
          </View>
          <View border="none" padding="none">
            <Text emphasis='bold' size='small'>{author_2}</Text>
          </View>
          <View border="none" padding="none" inlineAlignment={'end'}>
            <Text appearance="success" size='small' emphasis='bold'>Verified Buyer</Text>
          </View>
        </InlineLayout>
        <TextBlock size='extraSmall' inlineAlignment='start'>
          {content_2}
        </TextBlock>
      </View>
    </Grid>
    <BlockSpacer spacing="loose" />
    <Image source={why_choose} fit={'cover'} /> 
    <BlockSpacer spacing="loose" />
    <Grid
      columns={['13%', 'fill']}
      spacing="loose"
      blockAlignment={'start'}
      inlineAlignment={'start'}
    >
      <View border="none" padding="none">
        <Image source={shipping_icon} fit={'cover'} /> 
      </View>
      <View border="none" padding="none">
        <InlineLayout columns={['fill']} blockAlignment={'center'}>
          <View border="none" padding="none" inlineAlignment={'start'}>
            <Text size='small' emphasis='bold'>{shipping_heading}</Text>
          </View>
        </InlineLayout>
        <TextBlock size='extraSmall' inlineAlignment='start'>
          {shipping_description}
        </TextBlock>
      </View>
    </Grid>
    <BlockSpacer spacing="loose" />
    <Grid
      columns={['13%', 'fill']}
      spacing="loose"
      blockAlignment={'start'}
      inlineAlignment={'start'}
    >
      <View border="none" padding="none">
        <Image source={truck_icon} fit={'cover'} /> 
      </View>
      <View border="none" padding="none">
        <InlineLayout columns={['fill']} blockAlignment={'center'}>
          <View border="none" padding="none" inlineAlignment={'start'}>
            <Text size='small' emphasis='bold'>{delivery_heading}</Text>
          </View>
        </InlineLayout>
        <TextBlock size='extraSmall' inlineAlignment='start'>
          {delivery_description}
        </TextBlock>
      </View>
    </Grid>
    </>
  );
}
