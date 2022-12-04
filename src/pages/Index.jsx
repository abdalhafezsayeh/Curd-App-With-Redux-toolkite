import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useCallback } from 'react'
// components
import Postes from '../components/Postes'
// Slices 
import {fetchPostsApi, deleteWithId} from '../state/postesSlice'

function Index() {
    // Get State from Store 
    const {records , loading, error} = useSelector((state) => state.postes)
    // get useDispatch Use In Faire Some Action 
    const dispatch = useDispatch()

   
    useEffect(() => {
      // Faire some Action
      dispatch(fetchPostsApi());
      // console.log('reun useEffect')
    }, [dispatch]);

    // Avoid Re-Evalute With CallBack Hook 
   const deleteRecord = useCallback(
      (id) => {
        dispatch(deleteWithId(id));
      },
      [dispatch]
    );



    // console.log(posts)
  return (
    // Pase Value as PropsWithChildren 
    <Postes records={records} loading={loading} error={error} deleteRecord={deleteRecord}  />
  )
}

export default Index