"use client"
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { UserContext } from '@/components/Context/UserContext'

// ── Constants ────────────────────────────────────────────────────────────────
const steps = [
    { id: 1, label: 'Job Information', icon: '💼' },
    { id: 2, label: 'Job Description', icon: '📋' },
    { id: 3, label: 'Perks & Benefit', icon: '🎁' },
]

const employmentTypes = ['Full-Time', 'Part-Time', 'Remote', 'Internship', 'Contract', 'Freelance']
const experienceLevels = ['Entry-Level', 'Mid-Level', 'Senior-Level', 'Lead', 'Manager']
const categoryOptions = [
    'Software Development', 'Design', 'Marketing', 'Sales',
    'Data & Analytics', 'DevOps', 'Product Management', 'Customer Support',
]
const perksOptions = [
    'Health Insurance', 'Remote Work', '401k', 'Paid Leave',
    'Stock Options', 'Gym Membership', 'Learning Budget', 'Flexible Hours',
]

// ── Initial form state (matches payload exactly) ─────────────────────────────
const initialForm = {
    jobTitle: '',
    employmentType: '',
    salary: '',
    categories: '',
    deadline: '',
    capacity: '',
    skills: [],
    jobDescriptions: '',
    responsibilities: '',
    whoYouAre: '',
    niceToHaves: '',
    perksAndBenefits: [],
    company: '',
    location: '',
    experienceLevel: '',
    remote: false,
}

// ── Step 1: Job Information ──────────────────────────────────────────────────
const JobInformation = ({ form, setForm }) => {
    const [newSkill, setNewSkill] = useState('')

    const addSkill = () => {
        const trimmed = newSkill.trim()
        if (trimmed && !form.skills.includes(trimmed)) {
            setForm((f) => ({ ...f, skills: [...f.skills, trimmed] }))
            setNewSkill('')
        }
    }

    const removeSkill = (skill) =>
        setForm((f) => ({ ...f, skills: f.skills.filter((s) => s !== skill) }))

    return (
        <div style={styles.stepContent}>
            <div style={styles.sectionHeader}>
                <h3 style={styles.sectionTitle}>Basic Information</h3>
                <p style={styles.sectionSubtitle}>This information will be displayed publicly</p>
            </div>
            <hr style={styles.divider} />

            {/* Job Title */}
            <div style={styles.fieldRow}>
                <div style={styles.fieldLabel}>
                    <strong>Job Title</strong>
                    <p style={styles.fieldHint}>Job title must describe one position</p>
                </div>
                <div style={styles.fieldControl}>
                    <input
                        style={styles.input}
                        placeholder="e.g. Software Engineer"
                        value={form.jobTitle}
                        onChange={(e) => setForm((f) => ({ ...f, jobTitle: e.target.value }))}
                    />
                </div>
            </div>
            <hr style={styles.divider} />

            {/* Employment Type */}
            <div style={styles.fieldRow}>
                <div style={styles.fieldLabel}>
                    <strong>Type of Employment</strong>
                    <p style={styles.fieldHint}>Select one type of employment</p>
                </div>
                <div style={styles.fieldControl}>
                    {employmentTypes.map((type) => (
                        <label key={type} style={styles.checkboxLabel}>
                            <input
                                type="radio"
                                name="employmentType"
                                checked={form.employmentType === type}
                                onChange={() => setForm((f) => ({ ...f, employmentType: type }))}
                                style={styles.checkbox}
                            />
                            <span>{type}</span>
                        </label>
                    ))}
                </div>
            </div>
            <hr style={styles.divider} />

            {/* Salary */}
            <div style={styles.fieldRow}>
                <div style={styles.fieldLabel}>
                    <strong>Salary</strong>
                    <p style={styles.fieldHint}>Specify the estimated salary for the role</p>
                </div>
                <div style={styles.fieldControl}>
                    <div style={styles.salaryInputs}>
                        <span style={styles.currencyBox}>$</span>
                        <input
                            style={{ ...styles.input, width: 160 }}
                            type="number"
                            placeholder="e.g. 2500"
                            value={form.salary}
                            onChange={(e) => setForm((f) => ({ ...f, salary: e.target.value }))}
                        />
                    </div>
                </div>
            </div>
            <hr style={styles.divider} />

            {/* Location */}
            <div style={styles.fieldRow}>
                <div style={styles.fieldLabel}>
                    <strong>Location</strong>
                    <p style={styles.fieldHint}>Where is this role based?</p>
                </div>
                <div style={styles.fieldControl}>
                    <input
                        style={styles.input}
                        placeholder="e.g. Lagos, Nigeria"
                        value={form.location}
                        onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
                    />
                    <label style={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={form.remote}
                            onChange={(e) => setForm((f) => ({ ...f, remote: e.target.checked }))}
                            style={styles.checkbox}
                        />
                        <span>Remote position</span>
                    </label>
                </div>
            </div>
            <hr style={styles.divider} />

            {/* Categories */}
            <div style={styles.fieldRow}>
                <div style={styles.fieldLabel}>
                    <strong>Categories</strong>
                    <p style={styles.fieldHint}>Select the job category</p>
                </div>
                <div style={styles.fieldControl}>
                    <select
                        style={styles.select}
                        value={form.categories}
                        onChange={(e) => setForm((f) => ({ ...f, categories: e.target.value }))}
                    >
                        <option value="">Select Job Category</option>
                        {categoryOptions.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            </div>
            <hr style={styles.divider} />

            {/* Experience Level */}
            <div style={styles.fieldRow}>
                <div style={styles.fieldLabel}>
                    <strong>Experience Level</strong>
                    <p style={styles.fieldHint}>Required experience for this role</p>
                </div>
                <div style={styles.fieldControl}>
                    <select
                        style={styles.select}
                        value={form.experienceLevel}
                        onChange={(e) => setForm((f) => ({ ...f, experienceLevel: e.target.value }))}
                    >
                        <option value="">Select Experience Level</option>
                        {experienceLevels.map((lvl) => (
                            <option key={lvl} value={lvl}>{lvl}</option>
                        ))}
                    </select>
                </div>
            </div>
            <hr style={styles.divider} />

            {/* Deadline & Capacity */}
            <div style={styles.fieldRow}>
                <div style={styles.fieldLabel}>
                    <strong>Deadline & Capacity</strong>
                    <p style={styles.fieldHint}>Application deadline and number of openings</p>
                </div>
                <div style={styles.fieldControl}>
                    <div style={{ display: 'flex', gap: 12 }}>
                        <div style={{ flex: 1 }}>
                            <p style={{ fontSize: 13, color: '#515B6F', marginBottom: 6 }}>Application Deadline</p>
                            <input
                                style={styles.input}
                                type="date"
                                value={form.deadline}
                                onChange={(e) => setForm((f) => ({ ...f, deadline: e.target.value }))}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <p style={{ fontSize: 13, color: '#515B6F', marginBottom: 6 }}>No. of Hires</p>
                            <input
                                style={styles.input}
                                type="number"
                                placeholder="e.g. 15"
                                value={form.capacity}
                                onChange={(e) => setForm((f) => ({ ...f, capacity: e.target.value }))}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <hr style={styles.divider} />

            {/* Required Skills */}
            <div style={styles.fieldRow}>
                <div style={styles.fieldLabel}>
                    <strong>Required Skills</strong>
                    <p style={styles.fieldHint}>Add required skills for the job</p>
                </div>
                <div style={styles.fieldControl}>
                    <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                        <input
                            style={{ ...styles.input, flex: 1 }}
                            placeholder="Type a skill and press Enter or click Add"
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                        />
                        <button style={styles.addSkillBtn} onClick={addSkill}>+ Add</button>
                    </div>
                    <div style={styles.skillTags}>
                        {form.skills.map((skill) => (
                            <span key={skill} style={styles.tag}>
                                {skill}
                                <button style={styles.tagRemove} onClick={() => removeSkill(skill)}>×</button>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

// ── Step 2: Job Description ──────────────────────────────────────────────────
const JobDescription = ({ form, setForm }) => (
    <div style={styles.stepContent}>
        <div style={styles.sectionHeader}>
            <h3 style={styles.sectionTitle}>Job Description</h3>
            <p style={styles.sectionSubtitle}>Describe the role, responsibilities and ideal candidate</p>
        </div>
        <hr style={styles.divider} />

        <div style={styles.fieldRow}>
            <div style={styles.fieldLabel}>
                <strong>Description</strong>
                <p style={styles.fieldHint}>Give an overview of the role</p>
            </div>
            <div style={styles.fieldControl}>
                <textarea
                    style={{ ...styles.input, height: 130, resize: 'vertical' }}
                    placeholder="e.g. We are looking for a skilled developer..."
                    value={form.jobDescriptions}
                    onChange={(e) => setForm((f) => ({ ...f, jobDescriptions: e.target.value }))}
                />
            </div>
        </div>
        <hr style={styles.divider} />

        <div style={styles.fieldRow}>
            <div style={styles.fieldLabel}>
                <strong>Responsibilities</strong>
                <p style={styles.fieldHint}>List the key responsibilities</p>
            </div>
            <div style={styles.fieldControl}>
                <textarea
                    style={{ ...styles.input, height: 120, resize: 'vertical' }}
                    placeholder="e.g. Develop UI components, collaborate with backend developers..."
                    value={form.responsibilities}
                    onChange={(e) => setForm((f) => ({ ...f, responsibilities: e.target.value }))}
                />
            </div>
        </div>
        <hr style={styles.divider} />

        <div style={styles.fieldRow}>
            <div style={styles.fieldLabel}>
                <strong>Who You Are</strong>
                <p style={styles.fieldHint}>Describe the ideal candidate</p>
            </div>
            <div style={styles.fieldControl}>
                <textarea
                    style={{ ...styles.input, height: 110, resize: 'vertical' }}
                    placeholder="e.g. A passionate developer with strong problem-solving skills..."
                    value={form.whoYouAre}
                    onChange={(e) => setForm((f) => ({ ...f, whoYouAre: e.target.value }))}
                />
            </div>
        </div>
        <hr style={styles.divider} />

        <div style={styles.fieldRow}>
            <div style={styles.fieldLabel}>
                <strong>Nice To Haves</strong>
                <p style={styles.fieldHint}>Optional but desirable skills or experience</p>
            </div>
            <div style={styles.fieldControl}>
                <textarea
                    style={{ ...styles.input, height: 100, resize: 'vertical' }}
                    placeholder="e.g. Experience with TypeScript and REST APIs..."
                    value={form.niceToHaves}
                    onChange={(e) => setForm((f) => ({ ...f, niceToHaves: e.target.value }))}
                />
            </div>
        </div>
    </div>
)

// ── Step 3: Perks & Benefits ─────────────────────────────────────────────────
const PerksAndBenefit = ({ form, setForm }) => {
    const toggle = (perk) =>
        setForm((f) => ({
            ...f,
            perksAndBenefits: f.perksAndBenefits.includes(perk)
                ? f.perksAndBenefits.filter((p) => p !== perk)
                : [...f.perksAndBenefits, perk],
        }))

    return (
        <div style={styles.stepContent}>
            <div style={styles.sectionHeader}>
                <h3 style={styles.sectionTitle}>Perks & Benefits</h3>
                <p style={styles.sectionSubtitle}>Attract talent by highlighting what makes your company great</p>
            </div>
            <hr style={styles.divider} />
            <div style={styles.fieldRow}>
                <div style={styles.fieldLabel}>
                    <strong>Benefits</strong>
                    <p style={styles.fieldHint}>Select all that apply</p>
                </div>
                <div style={{ ...styles.fieldControl, flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                    {perksOptions.map((perk) => {
                        const active = form.perksAndBenefits.includes(perk)
                        return (
                            <button
                                key={perk}
                                onClick={() => toggle(perk)}
                                style={{
                                    padding: '8px 18px',
                                    borderRadius: 20,
                                    border: `2px solid ${active ? '#4640DE' : '#D6DDEB'}`,
                                    background: active ? '#4640DE' : '#fff',
                                    color: active ? '#fff' : '#515B6F',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    fontSize: 14,
                                    transition: 'all 0.2s',
                                    fontFamily: 'inherit',
                                }}
                            >
                                {perk}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

// ── Main Component ───────────────────────────────────────────────────────────
const Post = () => {
    const router = useRouter()
    const [step, setStep] = useState(1)
    const [form, setForm] = useState({ ...initialForm })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const stepProps = { form, setForm }

    const {token} = useContext(UserContext)

    const handleSubmit = async () => {
        setLoading(true)
        setError(null)

        // Build final payload — coerce numeric fields
        const payload = {
            ...form,
            salary: Number(form.salary),
            capacity: Number(form.capacity),
        }

        try {
            const res = await fetch('/api/postJob', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            })

            const data = await res.json()

            if (res.ok) {
                toast.success("Job Posted Successfully")
                router.push('/company/jobs') 
            } else {
                setError(data.message || 'Failed to post job. Please try again.')
            }
        } catch (err) {
            console.error('Post job error:', err)
            setError('Network error. Please check your connection.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={styles.page}>
            <div style={styles.container}>

                {/* Header */}
                <div style={styles.header}>
                    <button
                        style={styles.backBtn}
                        onClick={() => step > 1 ? setStep(step - 1) : router.back()}
                    >
                        ← Post a Job
                    </button>
                </div>

                {/* Step Indicator */}
                <div style={styles.stepBar}>
                    {steps.map((s, i) => {
                        const isActive = step === s.id
                        const isCompleted = step > s.id
                        return (
                            <React.Fragment key={s.id}>
                                <div style={styles.stepItem} onClick={() => setStep(s.id)}>
                                    <div style={{
                                        ...styles.stepIcon,
                                        background: isActive ? '#4640DE' : isCompleted ? '#E8E7FD' : '#F8F8FD',
                                        border: `2px solid ${isActive || isCompleted ? '#4640DE' : '#D6DDEB'}`,
                                    }}>
                                        <span style={{ fontSize: 18 }}>{s.icon}</span>
                                    </div>
                                    <div>
                                        <p style={{ ...styles.stepNum, color: isActive ? '#4640DE' : '#7C8493' }}>
                                            Step {s.id}/3
                                        </p>
                                        <p style={{ ...styles.stepLabel, color: isActive ? '#25324B' : '#7C8493' }}>
                                            {s.label}
                                        </p>
                                    </div>
                                </div>
                                {i < steps.length - 1 && <div style={styles.stepDivider} />}
                            </React.Fragment>
                        )
                    })}
                </div>

                {/* Step Content */}
                {step === 1 && <JobInformation {...stepProps} />}
                {step === 2 && <JobDescription {...stepProps} />}
                {step === 3 && <PerksAndBenefit {...stepProps} />}

                {/* Error Banner */}
                {error && (
                    <div style={styles.errorBanner}>
                        ⚠️ {error}
                    </div>
                )}

                {/* Footer */}
                <div style={styles.footer}>
                    {step > 1 && (
                        <button style={styles.backStepBtn} onClick={() => setStep(step - 1)}>
                            ← Previous
                        </button>
                    )}
                    {step < 3 ? (
                        <button style={styles.nextBtn} onClick={() => setStep(step + 1)}>
                            Next Step
                        </button>
                    ) : (
                        <button
                            style={{ ...styles.nextBtn, opacity: loading ? 0.7 : 1 }}
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {loading ? 'Posting...' : 'Post Job'}
                        </button>
                    )}
                </div>

            </div>
        </div>
    )
}

// ── Styles ───────────────────────────────────────────────────────────────────
const styles = {
    page: {
        minHeight: '100vh',
        // background: '#F8F8FD',
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        // padding: '32px 16px',
    },
    container: {
        // maxWidth: 780,
        margin: '0 auto',
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 32px rgba(0,0,0,0.07)',
        overflow: 'hidden',
    },
    header: { padding: '20px 32px 0' },
    backBtn: {
        background: 'none',
        border: 'none',
        fontSize: 20,
        fontWeight: 700,
        color: '#25324B',
        cursor: 'pointer',
        padding: 0,
    },
    stepBar: {
        display: 'flex',
        alignItems: 'center',
        padding: '20px 32px',
        borderBottom: '1px solid #D6DDEB',
    },
    stepItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        cursor: 'pointer',
        flex: 1,
    },
    stepIcon: {
        width: 48,
        height: 48,
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'all 0.2s',
    },
    stepNum: { fontSize: 12, margin: 0, fontWeight: 500 },
    stepLabel: { fontSize: 14, fontWeight: 700, margin: 0 },
    stepDivider: { height: 1, flex: 1, background: '#D6DDEB', margin: '0 16px' },
    stepContent: { padding: '0 32px' },
    sectionHeader: { padding: '24px 0 8px' },
    sectionTitle: { fontSize: 18, fontWeight: 700, color: '#25324B', margin: '0 0 4px' },
    sectionSubtitle: { fontSize: 14, color: '#515B6F', margin: 0 },
    divider: { border: 'none', borderTop: '1px solid #D6DDEB', margin: 0 },
    fieldRow: {
        display: 'flex',
        gap: 32,
        padding: '24px 0',
        alignItems: 'flex-start',
    },
    fieldLabel: { width: 220, flexShrink: 0 },
    fieldHint: { fontSize: 13, color: '#7C8493', margin: '4px 0 0' },
    fieldControl: { flex: 1, display: 'flex', flexDirection: 'column', gap: 8 },
    input: {
        width: '100%',
        padding: '10px 14px',
        border: '1px solid #D6DDEB',
        borderRadius: 8,
        fontSize: 14,
        color: '#25324B',
        outline: 'none',
        boxSizing: 'border-box',
        fontFamily: 'inherit',
    },
    checkboxLabel: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontSize: 14,
        color: '#25324B',
        cursor: 'pointer',
        padding: '4px 0',
    },
    checkbox: { width: 16, height: 16, accentColor: '#4640DE', cursor: 'pointer' },
    salaryInputs: { display: 'flex', alignItems: 'center', gap: 8 },
    currencyBox: {
        padding: '10px 12px',
        background: '#F8F8FD',
        border: '1px solid #D6DDEB',
        borderRadius: 8,
        fontSize: 14,
        color: '#515B6F',
    },
    select: {
        padding: '10px 14px',
        border: '1px solid #D6DDEB',
        borderRadius: 8,
        fontSize: 14,
        color: '#25324B',
        background: '#fff',
        cursor: 'pointer',
        width: '100%',
        outline: 'none',
        fontFamily: 'inherit',
    },
    addSkillBtn: {
        padding: '10px 16px',
        border: '2px solid #4640DE',
        borderRadius: 8,
        background: '#fff',
        fontSize: 14,
        color: '#4640DE',
        fontWeight: 600,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        fontFamily: 'inherit',
    },
    skillTags: { display: 'flex', flexWrap: 'wrap', gap: 8 },
    tag: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 12px',
        background: '#F8F8FD',
        border: '1px solid #D6DDEB',
        borderRadius: 20,
        fontSize: 13,
        color: '#4640DE',
        fontWeight: 600,
    },
    tagRemove: {
        background: 'none',
        border: 'none',
        color: '#4640DE',
        cursor: 'pointer',
        fontSize: 16,
        lineHeight: 1,
        padding: 0,
        fontWeight: 700,
    },
    errorBanner: {
        margin: '0 32px 16px',
        padding: '12px 16px',
        background: '#FFF0F0',
        border: '1px solid #FFCDD2',
        borderRadius: 8,
        color: '#C62828',
        fontSize: 14,
    },
    footer: {
        padding: '24px 32px',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 12,
        borderTop: '1px solid #D6DDEB',
    },
    backStepBtn: {
        padding: '14px 24px',
        background: '#fff',
        color: '#4640DE',
        border: '2px solid #4640DE',
        borderRadius: 8,
        fontSize: 15,
        fontWeight: 700,
        cursor: 'pointer',
        fontFamily: 'inherit',
    },
    nextBtn: {
        padding: '14px 32px',
        background: '#4640DE',
        color: '#fff',
        border: 'none',
        borderRadius: 8,
        fontSize: 15,
        fontWeight: 700,
        cursor: 'pointer',
        transition: 'background 0.2s',
        fontFamily: 'inherit',
    },
}

export default Post