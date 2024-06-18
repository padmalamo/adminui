import React, { useState, useEffect } from 'react';

function ReportForm({ params, onSubmit, onCancel }) {
    const [email, setEmail] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [appIds, setAppIds] = useState('');
    const [shadowLmsLender, setShadowLmsLender] = useState('');
    const [lenderFilter, setLenderFilter] = useState('');

    const [formVisibility, setFormVisibility] = useState({
        startDateShow: false,
        endDateShow: false,
        enterAppIdShow: false,
        shadowLenderShow: false,
        lenderShow: false,
    });

    const allLenders = ['riviera', 'Indifi capital', 'northernarc', 'caspian'];
    const allShadowLenders = ['Shadow Lender 1', 'Shadow Lender 2'];

    useEffect(() => {
        const [startDateShow, endDateShow, enterAppIdShow, shadowLenderShow, lenderShow] = params;

        setFormVisibility({
            startDateShow: startDateShow === 'true',
            endDateShow: endDateShow === 'true',
            enterAppIdShow: enterAppIdShow === 'true',
            shadowLenderShow: shadowLenderShow === 'true',
            lenderShow: lenderShow === 'true',
        });
    }, [params]);

    const handleSubmit = () => {
        const reportData = { email, startDate, endDate, appIds, shadowLmsLender, lenderFilter };
        onSubmit(reportData);
    };

    return (
        <div className="dialog-contents" style={{ width: '300px' }}>
            <div style={{ marginTop: '5px', display: 'flex', justifyContent: 'center' }}>
                <label>Email Ids (can be comma separated emails):
                    <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div className="divider" style={{ height: '10px' }}></div>
            {formVisibility.startDateShow && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <label>Start Date
                        <input
                            type="date"
                            className="input"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </label>
                </div>
            )}
            <div className="divider" style={{ height: '10px' }}></div>
            {formVisibility.endDateShow && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <label>End Date
                        <input
                            type="date"
                            className="input"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </label>
                </div>
            )}
            <div className="divider" style={{ height: '10px' }}></div>
            {formVisibility.enterAppIdShow && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <label>APP Ids (enter comma separated App Ids):
                        <input
                            type="text"
                            className="form-control"
                            value={appIds}
                            onChange={(e) => setAppIds(e.target.value)}
                        />
                    </label>
                </div>
            )}
            {formVisibility.shadowLenderShow && (
                <div className="form-group">
                    <label>Select shadow lms Lender</label>
                    <select
                        value={shadowLmsLender}
                        onChange={(e) => setShadowLmsLender(e.target.value)}
                    >
                        {allShadowLenders.map((lender, index) => (
                            <option key={index} value={lender}>{lender}</option>
                        ))}
                    </select>
                </div>
            )}
            {formVisibility.lenderShow && (
                <div className="form-group">
                    <label>Select Lender</label>
                    <select
                        value={lenderFilter}
                        onChange={(e) => setLenderFilter(e.target.value)}
                    >
                        {allLenders.map((lender, index) => (
                            <option key={index} value={lender}>{lender}</option>
                        ))}
                    </select>
                </div>
            )}
            <div className="divider" style={{ height: '10px' }}></div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                <button onClick={onCancel} className="button md-button md-default-theme">Cancel</button>
                <button onClick={handleSubmit} className="button primary-button md-button md-default-theme">Email Report</button>
            </div>
        </div>
    );
}

export default ReportForm;
