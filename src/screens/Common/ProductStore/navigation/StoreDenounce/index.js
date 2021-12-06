import {Block, Header, LazyImage, Text, Button, Dialoading} from '@components';
import {ScrollView, TextInput} from 'react-native';
import styles from './styles';
import actions, {_onFail} from '@redux/actions';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {theme} from '@theme';
import CheckBox from './components/Checkbox';
import {width} from '@utils/responsive';
import SelectImage from './components/SelectImage';
import storage from '@react-native-firebase/storage';
import {val} from './components/data';

const StoreDenounce = ({route}) => {
  const dispatch = useDispatch();
  const shop = useSelector(state => state.infoShop?.data);
  const isLoading = useSelector(state => state.addreport?.isLoading);

  const [modalVisible, setModalVisible] = useState(false);
  const {id} = route.params || {};
  const [value, setValue] = useState({key: '1', text: 'Sản phẩm cấm'});
  const [des, setDes] = useState();
  const [files, setFiles] = useState([]);
  const userInfo = useSelector(state => state.userInfo?.data);

  useEffect(() => {
    if (id) {
      dispatch({
        type: actions.GET_SHOP_USERS_BY_ID,
        body: {
          shopId: id,
        },
      });
    }
  }, [id, dispatch]);

  const filename = files.map(file => file);
  const submitEvent = async () => {
    let images = [];
    for (let index = 0; index < filename?.length; index++) {
      const name = filename[index]?.path.substring(
        filename[index]?.path.lastIndexOf('/') + 1,
      );
      const path = 'ImageRePort/' + name;
      const response = await fetch(filename[index]?.path);
      const file = await response.blob();
      let upload = await storage().ref(path).put(file);
      const url = await storage().ref(path).getDownloadURL();
      images.push(url);
    }
    const userid = userInfo?._id;
    const shopid = shop?._id;
    const reason = value.text;
    const description = des;
    const data = {
      userId: userid,
      shopId: shopid,
      reason: reason,
      description: description,
      images: images,
    };
    dispatch({
      type: actions.ADD_REPORT_SHOP,
      body: {
        reportInfo: JSON.stringify(data),
      },
    });
  };

  return (
    <Block flex>
      <Header checkBackground canGoBack title="Tố cáo cửa hàng này" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <>
          {isLoading && (
            <Dialoading
              Modaling={[modalVisible, setModalVisible]}
              title="Chờ trong giây lát..."
            />
          )}
        </>
        <Block backgroundColor={theme.colors.white} marginTop={5} row>
          <Block alignCenter justifyCenter width={80} height={80}>
            <LazyImage
              source={{
                uri: shop?.profilePicture,
              }}
              thumbnailSource={{uri: shop?.profilePicture}}
              style={styles.avatar}
            />
          </Block>
          <Block paddingVertical={10}>
            <Text marginTop={10} fontType="medium">
              {shop?.shopName}
            </Text>
            <Block marginTop={2} row alignCenter>
              <Block
                height={5}
                radius={5}
                width={5}
                marginRight={4}
                backgroundColor={
                  shop?.currentStatus === 'Online' && 'Idle'
                    ? theme.colors.green
                    : theme.colors.pink
                }
              />
              <Text size={11}>{shop?.currentStatus}</Text>
            </Block>
          </Block>
        </Block>
        <Block
          marginVertical={5}
          paddingBottom={15}
          backgroundColor={theme.colors.white}>
          <Text
            paddingLeft={10}
            size={17}
            fontType={'bold'}
            paddingVertical={7}>
            Lí do
          </Text>
          <CheckBox PROP={val} value={value} setValue={setValue} />
        </Block>
        <Block backgroundColor={theme.colors.white}>
          <TextInput
            multiline
            placeholder={'Ghi rõ lí do tố cáo....'}
            style={styles.input}
            width={width}
            onChangeText={text => setDes(text)}
            numberOfLines={2}
          />
        </Block>
        <Block
          marginVertical={5}
          paddingBottom={15}
          backgroundColor={theme.colors.white}>
          <Text
            paddingLeft={10}
            size={17}
            fontType={'bold'}
            paddingVertical={7}>
            Cung cấp hình ảnh tố cáo (nếu có)
          </Text>
          <SelectImage files={files} setFiles={setFiles} />
        </Block>
        <Block paddingTop={40} alignCenter>
          <Button
            onPress={submitEvent}
            title="Tố cáo"
            width={width - 20}
            height={45}
          />
        </Block>
      </ScrollView>
    </Block>
  );
};

export default StoreDenounce;
