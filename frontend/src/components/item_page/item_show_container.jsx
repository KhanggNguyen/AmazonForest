import { connect } from 'react-redux';
import { fetchItem } from "../../actions/item_actions";
import { createCartItem, fetchCartItem } from "../../actions/cart_item_actions";
import ItemShow from './item_show';

const mapStateToProps = (state, ownProps) => {
  let reviews;

  if (state.entities.reviews.data) {
    reviews = state.entities.reviews.data;
  }

  if(!state.entities.items[ownProps.match.params.id]){
    return {};
  }
  return {
    item: state.entities.items[ownProps.match.params.id],
    reviews: reviews,
    currentUser: state.session.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: (id) => dispatch(fetchItem(id)),
    createCartItem: (data) => dispatch(createCartItem(data)),
    fetchCartItem: (id) => dispatch(fetchCartItem(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);