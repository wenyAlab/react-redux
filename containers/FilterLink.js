import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../component/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
        //点击TODOitem 的时候发送action  type为SET_VISIBILITY_FILTER filter为ownprops.filter ownprops.filter => all, active,completed
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
