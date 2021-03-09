import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const CopyClicker = (props) => {
    const { copies, CpC, copyClicked, upgradeCopy } = props

    const onCopyClicked = () => {
        copyClicked()
    }

    const onImproveCopy = () => {
        upgradeCopy()
    }

    return (
        <div>
            <button type="button" className="theCopy" onClick={onCopyClicked}>
                <span role="img" aria-label="ClickThatCopy">💾</span>
            </button>

            <h2>CLICK THE COPY!</h2>

            <p>
                <span role="img" aria-label="copies">
                    {`💾: ${copies} copies`}
                </span>
            </p>

            <button type="button" onClick={onImproveCopy}>
                {`Upgrade ClicksPerCopy for ${CpC} copies`}
            </button>

            <p title="copies per click">
                {`CpC: ${CpC}`}
            </p>
        </div>
    )
}

CopyClicker.propTypes = {
    copies: PropTypes.number.isRequired,
    CpC: PropTypes.number.isRequired,
    copyClicked: PropTypes.func.isRequired,
    upgradeCopy: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    copies: state.copies,
    CpC: state.CpC
})

const mapDispatchToProps = (dispatch) => ({
    copyClicked: () => dispatch({ type: 'COPY_CLICK' }),
    upgradeCopy: () => dispatch({ type: 'UPGRADE_COPY' })
})

export default connect(mapStateToProps, mapDispatchToProps)(CopyClicker)
