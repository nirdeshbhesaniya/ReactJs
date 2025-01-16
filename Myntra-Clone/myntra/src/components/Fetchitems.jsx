import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";


const FetchItems = () => {
    const fetchStatus = useSelector((store) => store.fetchStatus);
    const dispatch = useDispatch();
    useEffect(() => {
        if (fetchStatus.fetchDone) return;
        const controller = new AbortController();
        const signal = controller.signal;
        dispatch(fetchStatusActions.markFetchingStarted());
        fetch("http://localhost:8080/items", { signal })
            .then((response) => response.json())
            .then(({ items }) => {
                dispatch(fetchStatusActions.markFetchDone());
                dispatch(fetchStatusActions.markFetchingFinished());
                dispatch(itemsActions.addInitialItems(items[0]));
            })
            .catch((error) => {
                if (error.name !== "AbortError") {
                    console.error("Fetch error:", error);
                }
            });

        return () => {
            controller.abort(); // Cleanup the fetch on unmount
        };
    }, [fetchStatus, dispatch]);

    return<></>;
};
export default FetchItems;