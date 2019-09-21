import ShopActionTypes from './shop.types';

import { 
    convertCollectionsSnapshotToMap,
    firestore 
} from '../../firebase/firebase.utils'

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(error => dispatch(fetchCollectionsStart(error.message)));
    }
}

export const fetchCollectionsSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
});